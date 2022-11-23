import { PgAccountld, PgUser } from '@/infra/repos/entities'
import { PgRepository } from '@/infra/repos/postgres/repository'
import { AddUserRepository } from '@/data/protocols/'
import { AddUser } from '@/domain/usecases'

export class PgUserAccountRepository extends PgRepository implements AddUserRepository {
  async add ({ password, username }: AddUser.Params): Promise<void> {
    const pgUserRepo = this.getRepository(PgUser)
    const pgAccountRepo = this.getRepository(PgAccountld)
    const account = await pgAccountRepo.save({ balance: 100.0 })
    try {
      await pgUserRepo.save({ username, account_id: account.id, password })
    } catch (e) {
      await pgAccountRepo.delete({ id: account.id })
      throw new Error('save User')
    }
  }
}
