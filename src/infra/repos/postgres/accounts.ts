import { PgUser } from '@/infra/repos/postgres/entities'
import { PgRepository } from '@/infra/repos/postgres/repository'
import { AddUserRepository } from '@/data/protocols/'
import { AddAccount } from '@/domain/usecases'

export class PgUserAccountRepository extends PgRepository implements AddUserRepository {
  async add ({ password, username }: AddAccount.Params): Promise<void> {
    const pgUserRepo = this.getRepository(PgUser)
    await pgUserRepo.save({ password, username })
  }
}
