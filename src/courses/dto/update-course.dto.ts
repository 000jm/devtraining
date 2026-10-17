
import { PartialType } from "@nestjs/mapped-types"
import { CreateCourseDTO } from "./create-course.dto.js"

export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {}
