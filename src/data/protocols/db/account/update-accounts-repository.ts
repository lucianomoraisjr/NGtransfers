import { UpAccount } from "@/domain/usecases"

export interface UpAccountRepository {
  update: (data: UpAccountRepository.Params) => Promise<void>
}

export namespace UpAccountRepository {
  export type Params = UpAccount.Params

}
