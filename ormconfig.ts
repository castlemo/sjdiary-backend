import { ConnectionOptions } from 'typeorm';

import { config } from './src/config';

export const ormconfig: ConnectionOptions = {
  type: 'mysql',
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  // synchronize: process.env.NODE_ENV == 'development' ? true : false,
  logging: process.env.NODE_ENV == 'local' ? false : false,
  // dropSchema: process.env.NODE_ENV == 'development' ? true : false,
  migrations: ['dist/src/migrations/*{.ts,.js}'],
  entities: ['dist/src/**/*.entity{.ts,.js}'],
  cli: {
    // entitiesDir: 'dist/src/modules/**/*.entity{.ts,.js}',
    migrationsDir: './src/migrations',
  },
};

export default ormconfig;
