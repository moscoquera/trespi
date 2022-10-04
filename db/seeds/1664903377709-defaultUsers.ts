import { User } from "../../src/users/entities/user.entity"
import { MigrationInterface, QueryRunner } from "typeorm"

export class defaultUsers1664903377709 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    const users = [queryRunner.manager.create(User,{
            rolesId:'99ccbe92-d7c8-42c6-ac7f-189e4c0ad93d',
            name:'admin',
            document:'12345'
        }),
        queryRunner.manager.create(User,{
            rolesId:'534371c4-e8c6-49fc-a226-9e9987a27745',
            name:'employee',
            document:'12345'
        })];
        await queryRunner.manager.save(users);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
