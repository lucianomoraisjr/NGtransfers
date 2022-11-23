import { PgAccountld } from '@/infra/repos/entities'
import { PgRepository } from '@/infra/repos/postgres/repository'
import { UpAccountRepository } from '@/data/protocols/'
import { UpAccount } from '@/domain/usecases'

export class PgUpAccountRepository extends PgRepository implements UpAccountRepository {
    async update ({balance,id}: UpAccount.Params):Promise<void>{
    const pgUserRepo = this.getRepository(PgAccountld)
        await pgUserRepo.update(id,{balance})
    }
}