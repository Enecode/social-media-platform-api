import jwt from 'jsonwebtoken';
import { User } from '../model';

const JWT_SECRET = 'your_secret_key';

export function generateToken(user: User): string {
  return jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
}

export function verifyToken(token: string): string | object {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return '';
  }
}
