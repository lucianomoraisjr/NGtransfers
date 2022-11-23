export interface CheckToken {
  check: (checkTokenParams: CheckToken.Params) => Promise<CheckToken.Result | null>
}

export namespace CheckToken {
  export type Params = {
    id: number
  }

  export type Result = {
    username: string,
    account: account
  }
}
type account = {
  balance: number
  id: number
}
