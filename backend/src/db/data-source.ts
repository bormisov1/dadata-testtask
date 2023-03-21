import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { PartyEntity } from './entities/party.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: 5432,
  username: 'user',
  password: 'admin',
  database: 'dadata-testtask',
  entities: [PartyEntity],
  synchronize: true,
});
