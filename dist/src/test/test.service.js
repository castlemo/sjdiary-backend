"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/user.entity");
let TestService = class TestService {
    async testRawQuery() {
        const result = await this.userRepo.query(`SELECT * from migrations`, []);
        console.log(result);
        console.log(result[0].id);
        console.log(result[0].timestamp);
        console.log(result[0].name);
        return true;
    }
};
__decorate([
    (0, typeorm_2.InjectRepository)(user_entity_1.User),
    __metadata("design:type", typeorm_1.Repository)
], TestService.prototype, "userRepo", void 0);
TestService = __decorate([
    (0, common_1.Injectable)()
], TestService);
exports.TestService = TestService;
//# sourceMappingURL=test.service.js.map