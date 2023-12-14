import { DataSourceOptions } from 'typeorm';

const typeORMConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: 'test',
  entities: ['dist/entities/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrations: ['src/migration/*.ts'],
  logging: true,
  logger: 'file',
};

export default typeORMConfig;
