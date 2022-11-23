import { DbAddAccount } from '@/data/usecases'
import { makeBcryptAdapter } from '@/main/factories/infra/cryptography/bcrypt-adapter'
import { makePgUserAccountRepo, makePgCheckByUsername } from '@/main/factories/infra/respos/postgres'
export const makeDbAddAccount = (): DbAddAccount => {
  return new DbAddAccount(
    makeBcryptAdapter(),
    makePgUserAccountRepo(),
    makePgCheckByUsername()
  )
}
