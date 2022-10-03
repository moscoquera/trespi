import { ColumnNumericTransformer } from "src/common/transformers/ColumnNumericTransformer.transformer";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({type:'varchar', length: 30})
    name: string;

    @Column({type: 'varchar', length: 30, nullable: true})
    description?: string;

    @Column({type: 'numeric', precision: 10, scale: 2, transformer: new ColumnNumericTransformer()})
    price: number;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt?: Date;
}
