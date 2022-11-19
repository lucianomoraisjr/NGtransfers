import { AddAccount } from '@/domain/usecases'

export interface AddAccountRepository {
  add: (data: AddAccountRepository.Params) => Promise<void>
}

export namespace AddAccountRepository {
  export type Params = AddAccount.Params

}
