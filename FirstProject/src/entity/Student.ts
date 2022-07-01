import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


export enum UserRole {
    ADMIN = "admin",
    USER = "user"
}

@Entity()
export class Student { 

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column({default: 10})
    registry_number: number;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole;
}