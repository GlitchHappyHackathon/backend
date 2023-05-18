import { User } from "src/auth/auth.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Info extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    todayPoint: number;
    
    @Column()
    totalPoint: number;

    @Column()
    step: number;

    @OneToOne(()=>User)
    @JoinColumn({referencedColumnName:'email'})
    user:User

} 