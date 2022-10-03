import { Product } from "../../src/products/entities/product.entity";
import { MigrationInterface, QueryRunner } from "typeorm"
import  productsSeed from '../products-seed.json'

export class products1664828976643 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      
      const productEntities = productsSeed.map( product => {
            return queryRunner.manager.create(Product,product)
      });

      await queryRunner.manager.save(productEntities);
      
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
