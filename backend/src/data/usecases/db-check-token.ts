
import { CheckToken } from '@/domain/usecases'
import { LoadAccountByIdRepository } from '@/data/protocols'

export class DbCheckToken implements CheckToken {
    constructor(
        private readonly loadUserByIdRepository: LoadAccountByIdRepository,
    ) { }
    async check({ id }: CheckToken.Params): Promise<CheckToken.Result | null> {
        const user = await this.loadUserByIdRepository.loadByid(id)
        if (user) return {
            account: user.account,
            username: user.username
        }
        return null
    }


}
