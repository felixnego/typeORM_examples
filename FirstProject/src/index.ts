import { AppDataSource } from "./data-source"
import { Student } from "./entity/Student"
import { User } from "./entity/User"
import { Profile } from "./entity/Profile"
import { Employee } from "./entity/Employee"


AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    const stud = new Student();
    stud.name = "felix";
    stud.age = 28;
    await AppDataSource.manager.save(stud);

    const profile = new Profile();
    profile.gender = "male";
    profile.photo = "me.jpg";
    await AppDataSource.manager.save(profile);

    const employee = new Employee();
    employee.name = "Joe Smith";
    employee.profile = profile;
    await AppDataSource.manager.save(employee);

    const employees = await AppDataSource.getRepository(Employee).find({
        relations: { profile: true }
    });

    console.log(employees);

    console.log("Here you can setup and run express / fastify / any other framework.")
    console.log("Working with entity manager")

    const results = await AppDataSource.manager.findOneBy(Employee, {
        id: 1
    });
    console.log(results);

}).catch(error => console.log(error))
