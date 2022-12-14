import { PgUser } from '@/infra/repos/entities'
import { PgRepository } from '@/infra/repos/postgres/repository'
import { LoadAccountByUserNameRepository } from '@/data/protocols/'

export class PgLoadkByUsername extends PgRepository implements LoadAccountByUserNameRepository {

    async loadByUsername (username: string): Promise<LoadAccountByUserNameRepository.Result> {
        const pgUserRepo = this.getRepository(PgUser)
        const user = await pgUserRepo.findOne({ where:{username},relations:['account'] })
        
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

