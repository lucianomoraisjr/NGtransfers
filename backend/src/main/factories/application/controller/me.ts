import {MeController  } from '@/application/controllers'
import { makeDbCheckToken } from '@/main/factories/data/usecases/db-check-token'
export const makeMeController = (): MeController => {
  return new MeController(
    makeDbCheckToken()
  )
}
