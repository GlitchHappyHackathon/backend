import { Info } from "src/info/info.entity";
import { Search } from "src/search/search.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity()
@Unique(['email'])
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;


    // @OneToMany(type => Board, board=> board.user, {eager:true})
    // boards : Board[]

    @OneToOne(()=>Info,(info)=>info.user)
    info: Info


    @OneToOne(()=>Search,(search)=>search.user)
    search: Search

}