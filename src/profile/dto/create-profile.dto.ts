import { IsNumber, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  nickname: string;

  @IsNumber()
  age: number;
}
