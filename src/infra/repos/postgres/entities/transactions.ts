import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity({ name: 'transactions' })
export class PgTransactions {
  @PrimaryGeneratedColumn()
    id!: number

  @Column()
    debitedAccountId!: number

  @Column()
    creditedAccountId!: number

  @Column()
    value!: number

  @CreateDateColumn()
    created_at!: Date
}
