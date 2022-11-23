import { CreateAccountController } from '@/application/controllers'
import { makeDbAddAccount } from '@/main/factories/data/usecases/db-add-account'
export const makeCreateAccountController = (): CreateAccountController => {
  return new CreateAccountController(
    makeDbAddAccount()
  )
}
