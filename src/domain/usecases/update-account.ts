export interface UpAccount {
  update: (account: UpAccount.Params) => Promise<UpAccount.Result>
}

export namespace UpAccount {
  export type Params = {
    id: number
    balance: number
  }

  export type Result = boolean
}
