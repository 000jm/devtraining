
import { Module } from '@nestjs/common'
import { CoursesController } from './courses.controller.js'
import { CoursesService } from './courses.service.js'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Course } from './entities/course.entity.js'
import { Tag } from './entities/tags.entity.js'

@Module({
    imports: [TypeOrmModule.forFeature([Course, Tag])],
    controllers: [CoursesController],
    providers: [CoursesService]
})
export class CoursesModule {}
