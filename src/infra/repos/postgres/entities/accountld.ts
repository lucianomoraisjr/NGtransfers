import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'accounts' })
export class PgAccountld {
  @PrimaryGeneratedColumn()
    id!: number

  @Column()
    balance!: number

  
}
