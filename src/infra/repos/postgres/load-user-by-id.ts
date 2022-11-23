import { PgUser } from '@/infra/repos/entities'
import { PgRepository } from '@/infra/repos/postgres/repository'
import { LoadAccountByIdRepository } from '@/data/protocols/'

export class PgLoadkById extends PgRepository implements LoadAccountByIdRepository {

    async loadByid (id: number): Promise<LoadAccountByIdRepository.Result> {
        const pgUserRepo = this.getRepository(PgUser)
        const user = await pgUserRepo.findOne({ where:{id},relations:['account'] })
        
        if(user){
            return {
                id: user.id,
                username: user.username,
                password: user.password,
                account :user.account
            }
        }

    }
}

