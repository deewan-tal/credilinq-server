import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TermsAndConditions {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    conditionOne: string;

    @Column()
    conditionOneActive: boolean;

    @Column()
    conditionTwo: string;

    @Column()
    conditionTwoActive: boolean;

    @Column()
    conditionThree: string;

    @Column()
    conditionThreeActive: boolean;
}