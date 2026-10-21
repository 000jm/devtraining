
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Tag } from "./tags.entity.js"

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @JoinTable()
    @ManyToMany(() => Tag, tag => tag.courses)
    tags: Tag[]
}
