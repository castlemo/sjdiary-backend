import * as dotenv from 'dotenv-safe';

process.env.NODE_ENV = process.env.NODE_ENV || 'local';

dotenv.config({
  allowEmptyValues: true,
  example: '.env.example',
  path: `.env.${process.env.NODE_ENV}`,
});

interface DBConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

interface Auth {
  auth0Domain: string;
  auth0Audience: string;
}
interface Config {
  port: number;
  db: DBConfig;
  auth: Auth;
}

export const config: Config = {
  port: Number(process.env.PORT),
  db: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  auth: {
    auth0Domain: process.env.AUTH0_DOMAIN,
    auth0Audience: process.env.AUTH0_AUDIENCE,
  },
};
