"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = void 0;
const dotenv = require("dotenv");
const constants_1 = require("../common/constants");
dotenv.config({
    path: `.env.${(_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'local'}`,
});
const env = process.env;
const config = {
    port: Number(env.PORT),
    db: {
        type: 'mysql',
        host: env[constants_1.DB_HOST],
        port: Number(env[constants_1.DB_PORT]),
        username: env[constants_1.DB_USERNAME],
        password: env[constants_1.DB_PASSWORD],
        database: env[constants_1.DB_DATABASE],
        logging: env[constants_1.NODE_ENV] === 'local' ? false : false,
        migrations: ['dist/database/migrations/*{.ts,.js}'],
        entities: ['dist/entities/**/*.entity{.ts,.js}'],
        cli: {
            migrationsDir: 'src/database/migrations',
        },
    },
    auth0: {
        domain: env[constants_1.AUTH0_DOMAIN],
        audience: env[constants_1.AUTH0_AUDIENCE],
    },
    gql: {
        autoSchemaFile: 'schema.gql',
        debug: env[constants_1.NODE_ENV] === 'local',
        sortSchema: true,
        cors: {
            origin: [env[constants_1.FRONTEND_URL]],
            credentials: true,
        },
    },
};
const getConfig = () => config;
exports.getConfig = getConfig;
//# sourceMappingURL=index.js.map