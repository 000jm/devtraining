
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'
import { Tag } from '../courses/entities/tags.entity.js'
import { Course } from '../courses/entities/course.entity.js'

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: async (configService: ConfigService) => {
                return {
                    type: 'postgres',
                    host: await configService.get('DB_HOST'),
                    port: Number(await configService.get('DB_PORT')),
                    username: await configService.get('DB_USER'),
                    password: await configService.get('DB_PASS'),
                    database: await configService.get('DB_NAME'),
                    entities: [Course, Tag],
                    synchronize: false
                }
            },
            inject: [ConfigService]
        })
    ]
})
export class DatabaseModule {}
