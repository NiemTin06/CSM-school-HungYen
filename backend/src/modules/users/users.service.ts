import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AdminCreateUserDto } from './dto/admin-create-user.dto.js';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema.js';
import { InjectModel } from '@nestjs/mongoose';
import { hashPasswordHelper } from '../../common/helpers/password.helper.js';
import aqp from 'api-query-params'
import { AdminUpdateUserDto } from './dto/admin-update-user.dto.js';
import { generateRandomPassword } from '@/common/utils/generate-password.js';
import { v4 as uuidv4 } from 'uuid';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name) 
    private userModel: Model<User>,
    private readonly mailerService: MailerService
    
  ) {}

  isEmailExist = async(email: string) => { 
    const user = await this.userModel.exists({email})
    if (user) return true;
    return false;
  }

  async create(createUserDto: AdminCreateUserDto) {
    const { name, email, password, role_id } = createUserDto;

    const isExist = await this.isEmailExist(email);
    if (isExist){
      throw new BadRequestException(`Email đã tồn tại: ${email}. Vui lòng sử dụng email khác`)
    }
    const hashPassword = await hashPasswordHelper(password);

    const user = await this.userModel.create({
      name,
      email,
      passwordHash: hashPassword,
      role_id,
    });


    await this.mailerService.sendMail({
      to: email,
      subject: 'Thông báo tạo tài khoản',
      template: "register",
      context: {
        name: name,
        password: password
      }
    })

    return {
      _id: user._id,
      password: password
    }
  }

  async findAll(query: string, current: number, pageSize:number) {
    const {filter , sort} = aqp(query);
    if (filter.current ) delete filter.current;
    if (filter.pageSize ) delete filter.pageSize;

    if (!current) current = 1
    if (!pageSize) pageSize = 10

    const totalItems = (await this.userModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems/pageSize);
    const skip = (+current - 1 ) * (+pageSize);
    const results = await this.userModel
      .find(filter)
      .limit(pageSize)
      .skip(skip)
      .select("-passwordHash")
      .sort(sort as any);

    return {results, totalPages}
  }

  async findById(id: string) {
    const user = await this.userModel.findOne({_id: id}).select("-passwordHash")
    return user;
  }

   async findByEmail(email: string) {
    const user = await this.userModel.findOne({ email }).select('+passwordHash')
    return user;
  }

  async update(id: string, adminUpdateUserDto: AdminUpdateUserDto) {
    return await this.userModel.updateOne({_id : id}, {...adminUpdateUserDto})
  }

  async remove(id: string) {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new NotFoundException(`Không tìm thấy người dùng ID: ${id} để xóa`);
    }
    return {
      message: 'Xóa người dùng thành công',
      deletedId: id,
    };
  }

  async adminResetPassword(id: string, password: string) {
  const passwordHash = await hashPasswordHelper(password);
  const user = await this.userModel.findByIdAndUpdate(
    id,
    { $set: { passwordHash } },
    { new: true },
  ).select('-passwordHash');

  if (!user) throw new NotFoundException('Không tìm thấy người dùng');
  return { message: 'Đặt lại mật khẩu thành công' };
  }

}
