
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Course } from './entities/course.entity.js'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class CoursesService {

    constructor(
        @InjectRepository(Course)
        private readonly coursesRepository: Repository<Course>
    ) {}

    async findAll() {
        return this.coursesRepository.find()
    }

    async findOne(id: number) {
        return this._get(id)
    }

    async create(createCourseDTO: any) {
        const course = this.coursesRepository.create(createCourseDTO)
        
        return this.coursesRepository.save(course)
    }

    update(id: number, updateCourseDTO: any) {
        this.findOne(id)
        const index = this.courses.findIndex(course => course.id === id)
        this.courses[index] = {
            id,
            ...updateCourseDTO,
        }

        return { id, ...updateCourseDTO }
    }

    delete(id: number) {
        this.findOne(id)
        const index = this.courses.findIndex(course => course.id === id)
        this.courses.splice(index, 1)
    }

    async _get(id: number) {
        // const course = await this.coursesRepository.findOneBy({ id })
        const course = await this.coursesRepository.findOne({ where: { id } })
        if(!course) {
            throw new HttpException(`Course with id ${id} not found`, HttpStatus.NOT_FOUND)
        }

        return course
    }

}