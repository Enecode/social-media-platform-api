import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { createUser } from '../repository';
import { generateToken } from './auth';

export async function registerUser(req: Request, res: Response): Promise<void> {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      res.status(409).json({ message: 'User already exists' });
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await createUser(username, email, hashedPassword);

    // Generate JWT token
    const token = generateToken(user);

    res.status(201).json({ token });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
