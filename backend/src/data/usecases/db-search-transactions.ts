import { SearchTransactions } from '@/domain/usecases'
import { SearchTransactionsRepository } from '@/data/protocols'

export class DbSearchTransactions implements SearchTransactions {

    constructor(
        private readonly searchTransactionsRepository: SearchTransactionsRepository
    ) { }

    async search(data: SearchTransactions.Params): Promise<SearchTransactions.Result> {
        return await this.searchTransactionsRepository.search(data)
    }
}