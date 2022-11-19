/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { AddAccount } from '@/domain/usecases'
import { Hasher, AddAccountRepository, CheckAccountByUserNameRepository } from '@/data/protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository,
    private readonly checkAccountByUserNameRepository: CheckAccountByUserNameRepository
  ) {}

  async add (accountData: AddAccount.Params): Promise<AddAccount.Result> {
    const exists = await this.checkAccountByUserNameRepository.checkByUsername(accountData.username)
    let isValid = false
    if (!exists) {
      const hashedPassword = await this.hasher.hash(accountData.password)
      await this.addAccountRepository.add({ ...accountData, password: hashedPassword })
      isValid = true
    }
    return isValid
  }
}
