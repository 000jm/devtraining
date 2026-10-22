
import { DataSource } from "typeorm"
import { dataSourceOptions } from "./database.module.js"
import { CreateCoursesTable1792677071107 } from "../migrations/1792677071107-CreateCoursesTable.js"
import { CreateTagsTable1792678811417 } from "../migrations/1792678811417-CreateTagsTable.js"

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateCoursesTable1792677071107, CreateTagsTable1792678811417]
})
