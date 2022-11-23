import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { PgAccountld } from '.'
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

  @OneToOne(() => PgAccountld,(account)=> account.user)
  @JoinColumn({ name: 'account_id' })
    account!: PgAccountld
}
