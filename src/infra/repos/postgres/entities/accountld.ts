import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm'
import { PgTransactions, PgUser } from '@/infra/repos/postgres/entities'
@Entity({ name: 'accounts' })
export class PgAccountld {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  balance!: number

  @OneToMany(() => PgTransactions, (transactions) => transactions.credited_account)
  credited!: PgTransactions[]

  @OneToMany(() => PgTransactions, (transactions) => transactions.debite_account)
  debite!: PgTransactions[]

  @OneToOne(() => PgUser, (user) => user.account) // specify inverse side as a second parameter
  user!: PgUser
}