
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    businessUEN: string;

    @Column()
    businessName: string;

    @Column()
    fullname: string;

    @Column()
    position: string;

    @Column()
    mobile: string;

    @Column()
    email: string;
}