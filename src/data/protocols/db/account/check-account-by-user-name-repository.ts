export interface CheckAccountByUserNameRepository {
  checkByEmail: (username: string) => Promise<CheckAccountByUserNameRepository.Result>
}

export namespace CheckAccountByUserNameRepository {
  export type Result = boolean
}
