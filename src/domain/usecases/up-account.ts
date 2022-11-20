export interface UpAccount {
  up: (account: UpAccount.Params) => Promise<UpAccount.Result>
}

export namespace UpAccount {
  export type Params = {
    id: number
    balance: Number
  }

  export type Result = boolean
}
