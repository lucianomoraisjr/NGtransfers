import {DbSearchTransactions} from '@/data/usecases/'
import {PgSearchTransactionsRepositoryextends} from '@/infra/repos/postgres/'

export const makeDbSearchTransactions =():DbSearchTransactions =>{
    return new DbSearchTransactions(
      new PgSearchTransactionsRepositoryextends()
   )
}