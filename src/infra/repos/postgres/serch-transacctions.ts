import { SearchTransactionsRepository } from '@/data/protocols'
import { PgRepository } from './repository';
import { PgTransactions } from '@/infra/repos/postgres/entities'
import { SearchTransactions } from '@/domain/usecases';
export class PgSearchTransactionsRepositoryextends extends PgRepository implements SearchTransactionsRepository {
    async search({ id, page, type }: SearchTransactions.Params): Promise<SearchTransactions.Result> {
        const pgTransacctions = this.getRepository(PgTransactions)
        const take = 2
        
        const [list, count] = await pgTransacctions.findAndCount({
            where: type == 'cash-out' ? { debited_account_id: id }
                : type == 'cash-in' ? [{ credited_account_id: id }]
                    : [{ credited_account_id: id }, { debited_account_id: id }]
            ,
            relations:['debite_account','credited_account','debite_account.user','credited_account.user'],
            order: { created_at: 'DESC' },
            skip: (page - 1) * take,
            take
        })
        console.log(list)
        return [{
            type: '1',
            username: 'ljr',
            value: 10
        }]
    }
}
