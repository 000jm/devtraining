
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Course } from './course.entity.js'

@Injectable()
export class CoursesService {
    private courses: Course[] = []

    findAll() {
        return this.courses
    }

    findOne(id: number) {
        const course =  this.courses.find(course => course.id === id)
        if(!course) {
            throw new HttpException(`Course with id ${id} not found`, HttpStatus.NOT_FOUND)
        }

        console.log(course)

        return course
    }

    create(createCourseDTO: any) {
        this.courses.push(createCourseDTO)
    }

    update(id: number, updateCourseDTO: any) {
        console.log(id)
        console.log(typeof id)

        this.findOne(id)
        const index = this.courses.findIndex(course => course.id === id)
        this.courses[index] = {
            id,
            ...updateCourseDTO,
        }
    }

    delete(id: number) {
        this.findOne(id)
        const index = this.courses.findIndex(course => course.id === id)
        this.courses.splice(index, 1)
    }
}