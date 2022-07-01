import "reflect-metadata"
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: ["src/entity/*{.js,.ts}"],
    migrations: ["src/migration/*{.js,.ts}"],
    migrationsTableName: "migrations",
    subscribers: [],
})
