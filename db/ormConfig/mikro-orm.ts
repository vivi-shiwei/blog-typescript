import { Users } from './entities/user';
import { Options } from '@mikro-orm/core';
import { resolve } from 'path';

const config: Options = {
  dbName: 'postgres',
  type: 'postgresql',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'wildest',
  entities: [ Users ],
  debug: process.env.NODE_ENV === 'development',
  migrations: {
    // tableName: 'mikro_orm_migrations', // migrations table name
    // path: process.cwd() + '/migrations', // path to folder with migration files
    'path': resolve('/migrations'),
    'pattern': /^[\w-]+\d+\.[tj]s$/
  }
};

export default config;
