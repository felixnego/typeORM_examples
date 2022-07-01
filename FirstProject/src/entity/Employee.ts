import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    OneToOne,
    JoinColumn 
} from "typeorm";
import { Profile } from "./Profile";


@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(() => Profile, (profile) => profile.employee)
    @JoinColumn()
    profile: Profile
}