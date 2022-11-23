import { SaveTransactions } from '@/domain/usecases'
import { LoadAccountByIdRepository, LoadAccountByUserNameRepository, UpAccountRepository, SaveTransactionsRepository } from '@/data/protocols'

export class DbSaveTransactions implements SaveTransactions {
    constructor(
        private readonly loadAccountByIdRepository: LoadAccountByIdRepository,
        private readonly loadAccountByUserNameRepository: LoadAccountByUserNameRepository,
        private readonly upAccountRepository: UpAccountRepository,
        private readonly saveTransactionsRepository: SaveTransactionsRepository,

    ) { }
    async save({ idDebi, value, usernameCred }: SaveTransactions.Params): Promise<boolean> {
        const debited = await this.loadAccountByIdRepository.loadByid(idDebi)
        if (!debited) throw new Error('user id not found')
        if (debited.account.balance < value) throw new Error('insufficient balance')
        const credited = await this.loadAccountByUserNameRepository.loadByUsername(usernameCred)
        if(!credited) throw new Error('Creator user does not exist')
        if (debited.username== credited.username) throw new Error('cannot transfer to yourself')
       await this.upAccountRepository.update({ id: debited.id, balance: debited.account.balance - value })
        await this.upAccountRepository.update({ id: credited.id, balance: credited.account.balance + value })
        await this.saveTransactionsRepository.save({ creditedAccountId: credited.id, debitedAccountId: debited.id, value })
        return true
    }
}