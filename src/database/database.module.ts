
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSourceOptions } from 'typeorm'
import { Course } from '../courses/entities/course.entity.js'

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    database: 'devtraining',
    password: 'docker',
    // entities: ['**/src/courses/**/entities/*.entity.ts'],
    entities: [Course],
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
