/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { AddUser } from '@/domain/usecases'
import { Hasher, AddUserRepository, CheckAccountByUserNameRepository } from '@/data/protocols'

export class DbAddAccount implements AddUser {
  constructor (
    private readonly hasher: Hasher,
    private readonly AddUserRepository: AddUserRepository,
    private readonly checkAccountByUserNameRepository: CheckAccountByUserNameRepository
  ) {}

  async add (accountData: AddUser.Params): Promise<AddUser.Result> {
    const exists = await this.checkAccountByUserNameRepository.checkByUsername(accountData.username)

    let isValid = false
    if (!exists) {
      const hashedPassword = await this.hasher.hash(accountData.password)
      await this.AddUserRepository.add({ ...accountData, password: hashedPassword })
      isValid = true
    }
    return isValid
  }
}
