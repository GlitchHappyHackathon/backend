import { User } from "src/auth/auth.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Search extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    searchList: string;
    

    @OneToOne(()=>User)
    @JoinColumn({referencedColumnName:'email'})
    user:User
    
    
} 