import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostService {
  constructor(private userService: UserService) {}
  @InjectRepository(Post) postRepository: Repository<Post>;

  async create(userId: number, createPostDto: CreatePostDto) {
    const user = await this.userService.findOne(userId);
    const createdPost = this.postRepository.create({
      ...createPostDto,
      user,
    });
    return this.postRepository.save(createdPost);
  }

  findAll() {
    return this.postRepository.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.postRepository.findOneByOrFail({ id });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.postRepository.update({ id }, updatePostDto);
  }

  remove(id: number) {
    return this.postRepository.delete({ id });
  }
}
