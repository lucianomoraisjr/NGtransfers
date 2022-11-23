
import { Authentication } from '@/domain/usecases'
import { LoadAccountByUserNameRepository,HashComparer,Encrypter } from '@/data/protocols'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByUserNameRepository: LoadAccountByUserNameRepository,
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter

  ) {}

  async auth (authenticationParams: Authentication.Params): Promise<Authentication.Result |null> {
    const account = await this.loadAccountByUserNameRepository.loadByUsername(authenticationParams.username)
    if (account) {
      const isValid = await this.hashComparer.compare(authenticationParams.password, account.password)
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(account.id)

        return {
          accessToken,
          username: account.username,
          account :account.account
        }
      }
    }
    return null
  }
}
