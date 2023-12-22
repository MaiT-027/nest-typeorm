import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ProfileService {
  constructor(private readonly userService: UserService) {}
  @InjectRepository(Profile) profileRepository: Repository<Profile>;

  async create(userId: number, createProfileDto: CreateProfileDto) {
    const user = await this.userService.findOne(userId);
    const createdProfile = this.profileRepository.create({
      ...createProfileDto,
      user,
    });
    return this.profileRepository.save(createdProfile);
  }

  findAll() {
    return this.profileRepository.find();
  }

  async findOne(userId: number) {
    const user = await this.userService.findOne(userId);
    return this.profileRepository.findOneByOrFail({ user });
  }

  async update(userId: number, updateProfileDto: UpdateProfileDto) {
    const user = await this.userService.findOne(userId);
    return this.profileRepository.update({ user }, updateProfileDto);
  }

  async remove(userId: number) {
    const user = await this.userService.findOne(userId);
    return this.profileRepository.delete({ user });
  }
}
