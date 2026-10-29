import { randomInt } from 'crypto';

export function generateRandomPassword(length = 10): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let password = '';

  for (let i = 0; i < length; i++) {
    password += chars[randomInt(chars.length)];
  }

  return password;
}