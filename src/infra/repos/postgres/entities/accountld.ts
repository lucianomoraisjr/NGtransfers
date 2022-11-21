import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import {PgTransactions} from '@/infra/repos/postgres/entities'
@Entity({ name: 'accounts' })
export class PgAccountld {
  @PrimaryGeneratedColumn()
    id!: number

  @Column()
    balance!: number

  @OneToMany(()=>PgTransactions, (transactions)=> transactions.credited_account)
  credited!: PgTransactions[]
  
  @OneToMany(()=>PgTransactions, (transactions)=> transactions.debite_account)
  debite!: PgTransactions[]
}
