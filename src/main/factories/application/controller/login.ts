import {LoginController  } from '@/application/controllers'
import { makeDbAuthentication } from '@/main/factories/data/usecases/db-authentication'
export const makeLoginController = (): LoginController => {
  return new LoginController(
    makeDbAuthentication()
  )
}
