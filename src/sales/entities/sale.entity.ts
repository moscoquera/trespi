import { User } from "../../../src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SaleProduct } from "./saleProduct.entity";

@Entity()
export class Sale {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'uuid', name:'user_id'})
    userId: string;

    @ManyToOne(() => User, (u) => u.sales)
    user: User;

    @OneToMany(()=>SaleProduct, (product) => product.sale, { cascade: true, onDelete:'CASCADE'})
    products:SaleProduct[];

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt?: Date;
}
