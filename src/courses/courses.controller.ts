
import { Body, Controller, Delete, Get, Param, Put, Post, BadRequestException } from '@nestjs/common'
import { CoursesService } from './courses.service.js'
import { CreateCourseDTO } from './dto/create-course.dto.js'
import { UpdateCourseDTO } from './dto/update-course.dto.js'

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
    create(@Body() createCourseDTO: CreateCourseDTO) {
        if(!createCourseDTO) {
            throw new BadRequestException(`Body data not provided or invalid`)
        }
        return this.coursesService.create(createCourseDTO)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCourseDTO: UpdateCourseDTO) {
        return this.coursesService.update(+id, updateCourseDTO)
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.coursesService.delete(+id)
    }

}
