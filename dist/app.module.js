"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const constants_1 = require("./common/constants");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const app_resolver_1 = require("./app.resolver");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.local',
                ignoreEnvFile: process.env.NODE_ENV === 'prod',
                validationSchema: Joi.object({
                    NODE_ENV: Joi.string().valid('local', 'prod').required(),
                    DB_HOST: Joi.string().required(),
                    DB_PORT: Joi.string().required(),
                    DB_USERNAME: Joi.string().required(),
                    DB_PASSWORD: Joi.string().required(),
                    DB_DATABASE: Joi.string().required(),
                    AUTH0_DOMAIN: Joi.string().required(),
                    AUTH0_AUDIENCE: Joi.string().required(),
                    FRONTEND_URL: Joi.string().required(),
                }),
            }),
            graphql_1.GraphQLModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    autoSchemaFile: 'schema.gql',
                    debug: true,
                    playground: true,
                    sortSchema: true,
                    cors: {
                        origin: [configService.get(constants_1.FRONTEND_URL)],
                        credentials: true,
                    },
                    plugins: [],
                }),
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get(constants_1.DB_HOST),
                    port: configService.get(constants_1.DB_PORT),
                    username: configService.get(constants_1.DB_USERNAME),
                    password: configService.get(constants_1.DB_PASSWORD),
                    database: configService.get(constants_1.DB_DATABASE),
                    logging: process.env.NODE_ENV == 'local' ? false : false,
                    migrations: ['dist/src/migrations/*{.ts,.js}'],
                    entities: ['dist/src/**/*.entity{.ts,.js}'],
                    cli: {
                        migrationsDir: './src/migrations',
                    },
                }),
            }),
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, app_resolver_1.AppResolver],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map