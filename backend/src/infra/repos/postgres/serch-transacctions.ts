import { SearchTransactionsRepository } from '@/data/protocols'
import { PgRepository } from './repository';
import { PgTransactions,PgUser } from '@/infra/repos/entities'
import { SearchTransactions } from '@/domain/usecases';
export class PgSearchTransactionsRepositoryextends extends PgRepository implements SearchTransactionsRepository {
    async search({ id, page, type }: SearchTransactions.Params): Promise<SearchTransactions.Result> {
        const pgTransacctions = this.getRepository(PgTransactions)
        const pgUser = this.getRepository(PgUser)
        const take = 10
        const user = await pgUser.findOne({where:{id},relations:['account']})
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
        let key
        for await ( key of list){
            
        }
        const res = list.map(key => {
            const cash = key.credited_account_id == id ? 'cash-in' : 'cash-out'
            return {
                type: cash,
                username: cash == 'cash-in' ? key.debite_account.user.username : key.credited_account.user.username,
                value: key.value,
                date: key.created_at,
               
            }
        })
        return [
            res,
            count,
            user?.account.balance
        ]
    }
}
