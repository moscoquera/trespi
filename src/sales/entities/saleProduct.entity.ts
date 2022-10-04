import { ColumnNumericTransformer } from "../../../src/common/transformers/ColumnNumericTransformer.transformer";
import { Product } from "../../../src/products/entities/product.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Sale } from "./sale.entity";

@Entity('products_sales')
export class SaleProduct {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'uuid', name:'sales_id'})
    salesId?: string;

    @ManyToOne(() => Sale, (sale)=>sale.products)
    sale:Sale;

    @Column({type:'uuid', name:'productsId'})
    productsId: string;

    @ManyToOne(() => Product, (product)=>product.sales)
    product:Product;

    @Column({type:'integer'})
    qty: number;

    @Column({type: 'numeric', precision: 10, scale: 2, transformer: new ColumnNumericTransformer()})
    price: number;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt?: Date;
}