
import {SaveTransactionsRepository} from '@/data/protocols'
import { PgRepository } from './repository';
import { PgTransactions} from '@/infra/repos/entities'
export class PgSaveTransactionsRepository extends PgRepository implements SaveTransactionsRepository {
   async save ({creditedAccountId,debitedAccountId,value}: SaveTransactionsRepository.Params) :Promise<void>{
    const pgTransacctions= this.getRepository(PgTransactions)
    await pgTransacctions.save({
        value,
        credited_account_id:creditedAccountId,
        debited_account_id:debitedAccountId
       })
    }
}
