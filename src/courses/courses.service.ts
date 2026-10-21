
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Course } from './entities/course.entity.js'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateCourseDTO } from './dto/create-course.dto.js'
import { UpdateCourseDTO } from './dto/update-course.dto.js'

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

    async create(createCourseDTO: CreateCourseDTO) {
        const course = this.coursesRepository.create(createCourseDTO)

        return this.coursesRepository.save(course)
    }

    async update(id: number, updateCourseDTO: UpdateCourseDTO) {
        const course = await this.coursesRepository.preload({
            ...updateCourseDTO,
            id
        })
        if(!course) {
            throw new HttpException(`Course with id ${id} not found`, HttpStatus.NOT_FOUND)
        }
        
        return this.coursesRepository.save(course)
    }

    async delete(id: number) {
        await this._get(id)
        await this.coursesRepository.delete({ id })
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