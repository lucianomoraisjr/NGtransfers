export interface SaveTransactions {
  save: (account: SaveTransactions.Params) => Promise<SaveTransactions.Result>
}

export namespace SaveTransactions {
  export type Params = {
    idDebi:number
    usernameCred: string
    value: number
  }

  export type Result = boolean
}
