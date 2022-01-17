"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1642425263088 = void 0;
class migration1642425263088 {
    constructor() {
        this.name = 'migration1642425263088';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`todo\` CHANGE \`started_at\` \`started_at\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`todo\` CHANGE \`finished_at\` \`finished_at\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` CHANGE \`started_at\` \`started_at\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` CHANGE \`finished_at\` \`finished_at\` timestamp NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`review\` CHANGE \`finished_at\` \`finished_at\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` CHANGE \`started_at\` \`started_at\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`todo\` CHANGE \`finished_at\` \`finished_at\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`todo\` CHANGE \`started_at\` \`started_at\` timestamp NOT NULL`);
    }
}
exports.migration1642425263088 = migration1642425263088;
//# sourceMappingURL=1642425263088-migration.js.map