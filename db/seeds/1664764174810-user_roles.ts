import { MigrationInterface, QueryRunner } from "typeorm"

export class userRoles1664764174810 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`insert into roles(id,name) values('99ccbe92-d7c8-42c6-ac7f-189e4c0ad93d','ADMIN')`);
        await queryRunner.query(`insert into roles(id,name) values('534371c4-e8c6-49fc-a226-9e9987a27745','EMPLOYEE')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
