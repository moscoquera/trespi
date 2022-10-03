import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type:'postgres',
    host:process.env.DB_HOST || 'db',
    port: process.env.DB_PORT? parseInt(process.env.DB_PORT): 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'trespi',
    database: process.env.DB_DATABASE || 'postgres',
    synchronize: true,
    logging: false,
    entities: ["./src/**/*.entity.ts"],
    migrations: ["./db/seeds/*.{js,ts}"],
    subscribers: []
})
