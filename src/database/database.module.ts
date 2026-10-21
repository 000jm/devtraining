
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSourceOptions } from 'typeorm'
import { Course } from '../courses/entities/course.entity.js'
import { Tag } from '../courses/entities/tags.entity.js'

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    database: 'devtraining',
    password: 'docker',
    entities: [Course, Tag],
    synchronize: true
}

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: async () => {
                return {
                   ...dataSourceOptions
                }
            }
        })
    ]
})
export class DatabaseModule {}
