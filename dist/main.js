"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const constants_1 = require("./common/constants");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = app.get(config_1.ConfigService).get(constants_1.PORT);
    await app.listen(port);
    console.log(`Tiry Server Start. Port: ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map