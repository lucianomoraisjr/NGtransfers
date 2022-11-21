import {DbSaveTransactions} from '@/data/usecases/'
import {PgLoadkById,PgLoadkByUsername,PgUpAccountRepository,PgSaveTransactionsRepository} from '@/infra/repos/postgres/'

export const makeDbSaveTransactions =():DbSaveTransactions =>{
    return new DbSaveTransactions(
        new PgLoadkById(),
        new PgLoadkByUsername(),
        new PgUpAccountRepository(),
        new PgSaveTransactionsRepository()
   )
}