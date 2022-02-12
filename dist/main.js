"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_1 = require("./app");
const constants_1 = require("./common/constants");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_1.AppModule);
    const port = app.get(config_1.ConfigService).get(constants_1.PORT);
    await app.listen(port);
    console.log(`SJDiary Server Start. Port: ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map