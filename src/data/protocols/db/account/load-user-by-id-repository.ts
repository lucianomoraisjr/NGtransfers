export interface LoadUserByIdRepository {
    loadById: (id: number) => Promise<LoadUserByIdRepository.Result>
  }
  
  export namespace LoadUserByIdRepository {
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