import { ColumnNumericTransformer } from "../../../src/common/transformers/ColumnNumericTransformer.transformer";
import { SaleProduct } from "../../../src/sales/entities/saleProduct.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @OneToMany(()=>SaleProduct, (sale) => sale.product)
    sales:SaleProduct[];

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt?: Date;
}
