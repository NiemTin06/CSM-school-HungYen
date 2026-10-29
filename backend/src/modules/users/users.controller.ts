import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { AdminUpdateUserDto } from './dto/admin-update-user.dto.js';
import { ParseObjectIdPipe } from '@nestjs/mongoose';
import { AdminCreateUserDto } from './dto/admin-create-user.dto.js';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  //done 
  @Post()
  create(@Body() adminCreateUserDto: AdminCreateUserDto,) {
    return this.usersService.create(adminCreateUserDto);
  }
 //done 
  @Get()
  // @Public()
  async findAll(
    @Query() query: string,
    @Query("current") current: string,
    @Query("pageSize") pageSize: string
  ) {
    
    return this.usersService.findAll(query, +current, +pageSize);
  }
 //done 
  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.usersService.findById(id);
  }
 //done 
  @Patch(':id')
  update(@Param('id') id: string, @Body() adminUpdateUserDto: AdminUpdateUserDto ) {
    return this.usersService.update(id, adminUpdateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.usersService.remove(id);
  }
}
