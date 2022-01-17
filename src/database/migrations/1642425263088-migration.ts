import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1642425263088 implements MigrationInterface {
    name = 'migration1642425263088'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`todo\` CHANGE \`started_at\` \`started_at\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`todo\` CHANGE \`finished_at\` \`finished_at\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` CHANGE \`started_at\` \`started_at\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` CHANGE \`finished_at\` \`finished_at\` timestamp NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`review\` CHANGE \`finished_at\` \`finished_at\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` CHANGE \`started_at\` \`started_at\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`todo\` CHANGE \`finished_at\` \`finished_at\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`todo\` CHANGE \`started_at\` \`started_at\` timestamp NOT NULL`);
    }

}
