
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSourceOptions } from 'typeorm'

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    database: 'devtraining',
    password: 'docker',
    entities: [],
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
