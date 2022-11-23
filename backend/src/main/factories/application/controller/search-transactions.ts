import { SearchTransactionsController} from '@/application/controllers'
import { makeDbSearchTransactions } from '@/main/factories/data/usecases/db-search-transactions'
export const makeSearchTransactionsController= (): SearchTransactionsController => {
  return new SearchTransactionsController(
    makeDbSearchTransactions()
  )
}
