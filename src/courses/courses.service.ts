
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Course } from './entities/course.entity.js'

@Injectable()
export class CoursesService {

    findAll() {
        return this.courses
    }

    findOne(id: number) {
        const course =  this.courses.find(course => course.id === id)
        if(!course) {
            throw new HttpException(`Course with id ${id} not found`, HttpStatus.NOT_FOUND)
        }

        return course
    }

    create(createCourseDTO: any) {
        const id = this.courses.findLastIndex(course => course) + 1
        if(id === 0) {
            this.courses.push({ id: + 1, ...createCourseDTO })
            return { id: 1, ...createCourseDTO }
        }
        this.courses.push({ id: id + 1, ...createCourseDTO })
        
        return { id: id + 1, ...createCourseDTO }
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

    _get(id: number) {
        const course = this.coursesRepository.findOneBy({ id })
        if(!course) {
            throw new HttpException(`Course with id ${id} not found`, HttpStatus.NOT_FOUND)
        }

        return course
    }

}