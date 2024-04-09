import User from './model';

export async function createUser(username: string, email: string, password: string): Promise<User> {
  return await User.create({ username, email, password });
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return await User.findOne({ email });
}

export async function getUserById(id: string): Promise<User | null> {
  return await User.findById(id);
}
