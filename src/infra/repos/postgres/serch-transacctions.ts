import { SearchTransactionsRepository } from '@/data/protocols'
import { PgRepository } from './repository';
import { PgTransactions } from '@/infra/repos/postgres/entities'
import { SearchTransactions } from '@/domain/usecases';
export class PgSearchTransactionsRepositoryextends extends PgRepository implements SearchTransactionsRepository {
    async search({ id, page, type }: SearchTransactions.Params): Promise<SearchTransactions.Result> {
        const pgTransacctions = this.getRepository(PgTransactions)
        const take = 10

        const [list, count] = await pgTransacctions.findAndCount({
            where: type == 'cash-out' ? { debited_account_id: id }
                : type == 'cash-in' ? [{ credited_account_id: id }]
                    : [{ credited_account_id: id }, { debited_account_id: id }]
            ,
            relations: ['debite_account', 'credited_account', 'debite_account.user', 'credited_account.user'],
            order: { created_at: 'DESC' },
            skip: (page - 1) * take,
            take,

        })
        let balance :number | undefined
        const res = list.map(key => {
            const cash = key.credited_account_id == id ? 'cash-in' : 'cash-out'
            balance = cash == 'cash-in' ? key.credited_account.balance : key.debite_account.balance
            return {
                type: cash,
                username: cash == 'cash-in' ? key.debite_account.user.username : key.credited_account.user.username,
                value: key.value,
                date: key.created_at,
               
            }
        })
        console.log(res)
        return [
            res,
            count,
            balance
        ]
    }
}
