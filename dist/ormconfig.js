"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormconfig = void 0;
const config_1 = require("./src/config");
exports.ormconfig = {
    type: 'mysql',
    host: config_1.config.db.host,
    port: config_1.config.db.port,
    username: config_1.config.db.username,
    password: config_1.config.db.password,
    database: config_1.config.db.database,
    logging: process.env.NODE_ENV == 'local' ? true : false,
    migrations: ['dist/src/migrations/*{.ts,.js}'],
    entities: ['dist/src/**/*.entity{.ts,.js}'],
    cli: {
        migrationsDir: './src/migrations',
    },
};
exports.default = exports.ormconfig;
//# sourceMappingURL=ormconfig.js.map