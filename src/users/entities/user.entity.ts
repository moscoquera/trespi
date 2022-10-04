import { Sale } from "../../../src/sales/entities/sale.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Roles } from "./roles.entity";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: 'varchar', length: 20, nullable: false})
    document: string;

    @Column({ type: 'varchar'})
    name: string;

    @Column({type: 'varchar', length: 30, nullable:true})
    last_name: string;

    @Column({type: 'uuid', nullable: false, name:'roles_id'})
    rolesId: string;

    @ManyToOne(() => Roles, (role) => role.users)
    @JoinColumn({name:'roles_id'})
    role?: Roles;

    @OneToMany(() => Sale, (sale) => sale.user)
    sales:Sale[];

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt?: Date;
}
