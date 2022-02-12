"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1644651552765 = void 0;
class migration1644651552765 {
    constructor() {
        this.name = 'migration1644651552765';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`auth0_id\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`profile_image_url\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_5222bec366027bdf8b11212001\` (\`auth0_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`todo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`content\` varchar(255) NOT NULL, \`started_at\` timestamp NULL, \`finished_at\` timestamp NULL, \`completed_at\` timestamp NULL, \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`review\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`content\` varchar(255) NOT NULL, \`started_at\` timestamp NULL, \`finished_at\` timestamp NULL, \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`todo\` ADD CONSTRAINT \`FK_9cb7989853c4cb7fe427db4b260\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_81446f2ee100305f42645d4d6c2\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_81446f2ee100305f42645d4d6c2\``);
        await queryRunner.query(`ALTER TABLE \`todo\` DROP FOREIGN KEY \`FK_9cb7989853c4cb7fe427db4b260\``);
        await queryRunner.query(`DROP TABLE \`review\``);
        await queryRunner.query(`DROP TABLE \`todo\``);
        await queryRunner.query(`DROP INDEX \`IDX_5222bec366027bdf8b11212001\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }
}
exports.migration1644651552765 = migration1644651552765;
//# sourceMappingURL=1644651552765-migration.js.map