
import 'dotenv/config'
import { DataSource } from "typeorm"
import { CreateCoursesTable1792677071107 } from "../migrations/1792677071107-CreateCoursesTable.js"
import { CreateTagsTable1792678811417 } from "../migrations/1792678811417-CreateTagsTable.js"
import { CreateCoursesTagsTable1792680044971 } from "../migrations/1792680044971-CreateCoursesTagsTable.js"
import { AddCoursesIdToCourseTagsTable1792680915759 } from "../migrations/1792680915759-AddCoursesIdToCourseTagsTable.js"
import { AddTagsIdToCourseTagsTable1792682861532 } from "../migrations/1792682861532-AddTagsIdToCourseTagsTable.js"
import { DataSourceOptions } from "typeorm/browser"
import { Course } from "../courses/entities/course.entity.js"
import { Tag } from "../courses/entities/tags.entity.js"

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    entities: [Course, Tag],
    synchronize: false
}

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateCoursesTable1792677071107, CreateTagsTable1792678811417, CreateCoursesTagsTable1792680044971, AddCoursesIdToCourseTagsTable1792680915759, AddTagsIdToCourseTagsTable1792682861532]
})
