import { User } from "src/auth/auth.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Position extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    coordinate:string

    @Column()
    image:string

    @Column()
    category:string
    
} 
