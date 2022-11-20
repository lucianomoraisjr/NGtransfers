export interface LoadAccountByUserNameRepository {
  loadByUsername: (username: string) => Promise<LoadAccountByUserNameRepository.Result>
}

export namespace LoadAccountByUserNameRepository {
  export type Result = {
    id: number
    username: string
    password: string
  } | undefined
}
