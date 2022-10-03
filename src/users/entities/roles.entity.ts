import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("roles")
export class Roles {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: "varchar", length: 30, nullable: false})
    name: string;

    @OneToMany(() => User, (user) => user.role)
    users: User[];

}