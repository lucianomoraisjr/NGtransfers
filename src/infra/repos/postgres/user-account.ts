import { PgUser } from '@/infra/repos/postgres/entities'
import { PgRepository } from '@/infra/repos/postgres/repository'
import { AddAccountRepository } from '@/data/protocols/'
import { AddAccount } from '@/domain/usecases'

export class PgUserAccountRepository extends PgRepository implements AddAccountRepository {
  async add ({ password, username }: AddAccount.Params): Promise<void> {
    const pgUserRepo = this.getRepository(PgUser)
    await pgUserRepo.save({ password, username })
  }
}
