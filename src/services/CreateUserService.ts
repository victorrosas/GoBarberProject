import { getRepository } from 'typeorm';

import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRespository = getRepository(User);

    const checkUserExists = await usersRespository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Email address already used.');
    }

    const user = usersRespository.create({
      name,
      email,
      password,
    });

    await usersRespository.save(user);

    return user;
  }
}

export default CreateUserService;
