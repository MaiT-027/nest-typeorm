import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';

const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: 'test',
  entities: [User, Post],
  synchronize: true,
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrations: ['dist/migration/*{.ts,.js}'],
  logging: true,
  logger: 'file',
  autoLoadEntities: true,
};

export default typeORMConfig;
