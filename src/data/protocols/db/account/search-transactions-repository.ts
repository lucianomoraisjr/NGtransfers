import { SearchTransactions } from "@/domain/usecases"

export interface SearchTransactionsRepository {
  search: (data: SearchTransactionsRepository.Params) => Promise<SearchTransactions.Result>
}

export namespace SearchTransactionsRepository {
  export type Params = SearchTransactions.Params
  export type Result = SearchTransactions.Result

}
