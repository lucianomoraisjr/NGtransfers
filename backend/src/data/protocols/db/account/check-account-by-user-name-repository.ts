export interface CheckAccountByUserNameRepository {
  checkByUsername: (username: string) => Promise<CheckAccountByUserNameRepository.Result>
}

export namespace CheckAccountByUserNameRepository {
  export type Result = boolean
}
