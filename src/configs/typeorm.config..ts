import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: 'test',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrations: ['dist/migration/*{.ts,.js}'],
  logging: true,
  logger: 'file',
  autoLoadEntities: true,
};

export default typeORMConfig;
