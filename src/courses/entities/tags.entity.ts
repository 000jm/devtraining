
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Course } from "./course.entity.js"
import { randomUUID } from "node:crypto"

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @ManyToMany(() => Course, course => course.tags)
    courses: Course[]

}
