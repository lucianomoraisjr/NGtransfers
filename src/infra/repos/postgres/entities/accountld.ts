import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'usuarios' })
export class PgAccountld {
  @PrimaryGeneratedColumn()
    id!: number

  @Column()
    balance!: number
}
