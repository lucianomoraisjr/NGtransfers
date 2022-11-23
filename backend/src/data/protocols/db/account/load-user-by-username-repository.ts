export interface LoadAccountByUserNameRepository {
  loadByUsername: (username: string) => Promise<LoadAccountByUserNameRepository.Result>
}

export namespace LoadAccountByUserNameRepository {
  export type Result = {
    id: number
    username: string
    password: string
    account : account
    
  } | undefined
}
type account ={
  id:number,
  balance:number 
}