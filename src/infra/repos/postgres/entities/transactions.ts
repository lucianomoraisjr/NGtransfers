import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { PgAccountld } from '@/infra/repos/postgres/entities'

@Entity({ name: 'transactions' })
export class PgTransactions {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  debited_account_id!: number

  @Column()
  credited_account_id!: number

  @Column()
  value!: number

  @ManyToOne(() => PgAccountld)
  @JoinColumn({ name: 'debited_account_id' })
  debite_account!: PgAccountld

  @ManyToOne(() => PgAccountld)
  @JoinColumn({ name: 'credited_account_id' })
  credited_account!: PgAccountld

  @CreateDateColumn()
  created_at!: Date
}
