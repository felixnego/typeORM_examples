import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Employee } from "./Employee";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gender: string

    @Column()
    photo: string

    @OneToOne(() => Employee, (employee) => employee.profile)
    employee: Employee
}