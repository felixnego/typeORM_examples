import { MigrationInterface, QueryRunner } from "typeorm";

export class firstMigration1656657633172 implements MigrationInterface {
    name = 'firstMigration1656657633172'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`student\` ADD \`registry_number\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`registry_number\``);
    }

}
