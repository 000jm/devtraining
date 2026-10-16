
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Put, Post } from '@nestjs/common'
import { CoursesService } from './courses.service.js'
import type { Course } from './course.entity.js'

@Controller('/courses')
export class CoursesController {

    constructor(private readonly coursesService: CoursesService) {}

    @Get('/')
    findAll() {
        return this.coursesService.findAll()
    }

    @Get(':id')
    // findOne(@Param() params: {id: number}) {
    findOne(@Param('id') id: number) {
        return this.coursesService.findOne(+id)
    }

    @Post('/')
    create(@Body() body: {}) {
        return this.coursesService.create(body)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: Course) {
        return this.coursesService.update(+id, body)
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.coursesService.delete(+id)
    }

}
