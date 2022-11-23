export interface LoadAccountByIdRepository {
  loadByid: (id: number) => Promise<LoadAccountByIdRepository.Result>
}

export namespace LoadAccountByIdRepository {
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