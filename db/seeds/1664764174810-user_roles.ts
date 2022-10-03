import { MigrationInterface, QueryRunner } from "typeorm"

export class userRoles1664764174810 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`insert into roles(name) values('ADMIN')`);
        await queryRunner.query(`insert into roles(name) values('EMPLOYEE')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
