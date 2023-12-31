import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post(':id')
  create(
    @Param('id') userId: number,
    @Body() createProfileDto: CreateProfileDto,
  ) {
    return this.profileService.create(userId, createProfileDto);
  }

  @Get(':id')
  findOne(@Param('id') userId: number) {
    return this.profileService.findOne(+userId);
  }

  @Patch(':id')
  update(
    @Param('id') userId: number,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profileService.update(+userId, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') userId: number) {
    return this.profileService.remove(userId);
  }
}
