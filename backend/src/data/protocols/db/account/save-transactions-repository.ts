

export interface SaveTransactionsRepository {
  save: (data: SaveTransactionsRepository.Params) => Promise<void>
}

export namespace SaveTransactionsRepository {
  export type Params = {
    debitedAccountId:number,
    creditedAccountId :number,
    value:number
  }

}
