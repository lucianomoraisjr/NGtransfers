import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'users' })
export class PgUser {
  @PrimaryGeneratedColumn()
    id!: number

  @Column()
    username!: string

  @Column()
    password!: string
}
