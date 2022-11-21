import { AddUser } from "@/domain/usecases" 

export interface AddUserRepository {
  add: (data: AddUserRepository.Params) => Promise<void>
}

export namespace AddUserRepository {
  export type Params = AddUser.Params

}
