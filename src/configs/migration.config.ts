import { DataSource } from 'typeorm';
import typeORMConfig from './typeorm.config';

const dataSource = new DataSource(typeORMConfig);
dataSource.initialize();
export default dataSource;
