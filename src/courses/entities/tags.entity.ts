
import { BeforeInsert, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Course } from "./course.entity.js"
import { randomUUID } from "node:crypto"

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @ManyToMany(() => Course, course => course.tags)
    courses: Course[]

    @BeforeInsert()
    generateId() {
        if(this.id) {
            return this.id
        }
        this.id = randomUUID()
    }
}
