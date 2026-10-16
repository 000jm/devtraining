
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common'

@Controller('/courses')
export class CoursesController {

    @Get('/')
    findAll(@Res() res) {
        return res.status(200).send('Listing all of our courses')
    }

    @HttpCode(200)
    @Get(':id')
    // findOne(@Param() params: {id: number}) {
    findOne(@Param('id') id: number) {
        if(id < 10) {
            return `id: 00${id}`
        }
        if(id < 100) {
            return `id: 0${id}`
        }
        return `id: ${id}`
    }

    @HttpCode(201)
    @Post('/')
    create(@Body() body: {}) {
        return body
    }

    @Patch(':id')
    update(@Param('id') id, @Res() res, @Body() body) {
        console.log(body)
        if(id < 10) {
            return res.status(200).send(`Update with id: 00${id}`)
        }
        if(id < 100) {
            return res.status(200).send(`Update with id: 0${id}`)
        }
        return res.status(200).send(`Update with id: ${id}`)
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    delete(@Param('id') id) {
        if(id < 10) {
            return `Course deleted with id 00${id}`
        }
        if(id < 100) {
            return `Course deleted with id 0${id}`
        }
        return `Course deleted with id ${id}`
    }

}
