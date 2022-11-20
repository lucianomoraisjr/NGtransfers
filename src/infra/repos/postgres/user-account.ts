import { PgAccountld, PgUser } from '@/infra/repos/postgres/entities'
import { PgRepository } from '@/infra/repos/postgres/repository'
import { AddUserRepository } from '@/data/protocols/'
import { AddAccount } from '@/domain/usecases'

export class PgUserAccountRepository extends PgRepository implements AddUserRepository {
  async add ({ password, username }: AddAccount.Params): Promise<void> {
    const pgUserRepo = this.getRepository(PgUser)
    const pgAccountRepo = this.getRepository(PgAccountld)
    const account = await pgAccountRepo.save({ balance: 0.0 })
    console.log(account)
    console.log('tes')
    await pgUserRepo.save({ password, username, account_id: account.id })
  }
}
