import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { PgAccountld } from '@/infra/repos/postgres/entities/'
@Entity({ name: 'users' })
export class PgUser {
  @PrimaryGeneratedColumn()
    id!: number

  @Column()
    password!: string

  @Column()
    username!: string

  @Column()
    account_id!: number

  @OneToOne(() => PgAccountld)
  @JoinColumn({ name: 'account_id' })
    account!: PgAccountld
}
