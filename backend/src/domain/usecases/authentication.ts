export interface Authentication {
  auth: (authenticationParams: Authentication.Params) => Promise<Authentication.Result | null>
}

export namespace Authentication {
  export type Params = {
    username: string
    password: string
  }

  export type Result = {
    accessToken: string
    username: string,
    account:account
  }
}
type account = {
  balance:number
  id:number
}
