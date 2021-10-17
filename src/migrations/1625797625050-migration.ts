import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1625797625050 implements MigrationInterface {
  name = 'migration1625797625050';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `todo_period` (`id` int NOT NULL AUTO_INCREMENT, `todo_id` int NOT NULL, `is_time` tinyint NOT NULL, `started_at` timestamp NOT NULL, `ended_at` timestamp NOT NULL, UNIQUE INDEX `REL_266fc440944262f0ef43ac7471` (`todo_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      "CREATE TABLE `user_setting` (`id` int NOT NULL AUTO_INCREMENT, `user_id` int NOT NULL, `theme` enum ('dark', 'white') NOT NULL DEFAULT 'dark', `start_of_week` enum ('monday', 'sunday') NOT NULL DEFAULT 'sunday', `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX `REL_94922c04577bc2bc75f2faba53` (`user_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB",
    );
    await queryRunner.query(
      'CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `auth0_id` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `nickname` varchar(255) NULL, `motto` varchar(255) NULL, `profile_image_url` varchar(255) NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deleted_at` timestamp(6) NULL, UNIQUE INDEX `IDX_5222bec366027bdf8b11212001` (`auth0_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `todo` (`id` int NOT NULL AUTO_INCREMENT, `user_id` int NOT NULL, `contents` varchar(255) NOT NULL, `all_index` int NOT NULL, `category_index` int NULL, `category_id` int NULL, `checked_at` timestamp NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deleted_at` timestamp(6) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `category` (`id` int NOT NULL AUTO_INCREMENT, `user_id` int NOT NULL, `name` varchar(255) NOT NULL, `color` varchar(255) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deleted_at` timestamp(6) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `todo_period` ADD CONSTRAINT `FK_266fc440944262f0ef43ac7471d` FOREIGN KEY (`todo_id`) REFERENCES `todo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `user_setting` ADD CONSTRAINT `FK_94922c04577bc2bc75f2faba53d` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `todo` ADD CONSTRAINT `FK_9cb7989853c4cb7fe427db4b260` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `todo` ADD CONSTRAINT `FK_568f6197c4a1a4380f3189acf1e` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `category` ADD CONSTRAINT `FK_6562e564389d0600e6e243d9604` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `category` DROP FOREIGN KEY `FK_6562e564389d0600e6e243d9604`',
    );
    await queryRunner.query(
      'ALTER TABLE `todo` DROP FOREIGN KEY `FK_568f6197c4a1a4380f3189acf1e`',
    );
    await queryRunner.query(
      'ALTER TABLE `todo` DROP FOREIGN KEY `FK_9cb7989853c4cb7fe427db4b260`',
    );
    await queryRunner.query(
      'ALTER TABLE `user_setting` DROP FOREIGN KEY `FK_94922c04577bc2bc75f2faba53d`',
    );
    await queryRunner.query(
      'ALTER TABLE `todo_period` DROP FOREIGN KEY `FK_266fc440944262f0ef43ac7471d`',
    );
    await queryRunner.query('DROP TABLE `category`');
    await queryRunner.query('DROP TABLE `todo`');
    await queryRunner.query(
      'DROP INDEX `IDX_5222bec366027bdf8b11212001` ON `user`',
    );
    await queryRunner.query('DROP TABLE `user`');
    await queryRunner.query(
      'DROP INDEX `REL_94922c04577bc2bc75f2faba53` ON `user_setting`',
    );
    await queryRunner.query('DROP TABLE `user_setting`');
    await queryRunner.query(
      'DROP INDEX `REL_266fc440944262f0ef43ac7471` ON `todo_period`',
    );
    await queryRunner.query('DROP TABLE `todo_period`');
  }
}
