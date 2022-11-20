import { PgUser } from '@/infra/repos/postgres/entities'
import { PgRepository } from '@/infra/repos/postgres/repository'
import { CheckAccountByUserNameRepository } from '@/data/protocols/'

export class PgCheckByUsername extends PgRepository implements CheckAccountByUserNameRepository {
  async checkByUsername (username: string): Promise<boolean> {
    const pgUserRepo = this.getRepository(PgUser)
    const verf = await pgUserRepo.findOne({ username })
    if (verf != null || verf !== undefined) return true
    return false
  }
}
