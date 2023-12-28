import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  @InjectRepository(User) userRepository: Repository<User>;

  create(createUserDto: CreateUserDto) {
    const createdUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(createdUser);
  }

  async findAll() {
    const users = await this.userRepository.find({
      relations: {
        profile: true,
      },
    });
    return users;
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneByOrFail({ id });
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id }, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete({ id });
  }
}
