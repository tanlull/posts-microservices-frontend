import {Entity, PrimaryGeneratedColumn,Column} from 'typeorm'
@Entity()

export class Comment{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    post_id:number;

    @Column()
    text:string;

}


