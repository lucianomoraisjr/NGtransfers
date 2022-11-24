import { Controller } from '@/application/controllers'
import { HttpResponse, ok, badRequest, serverError } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'

import { DbAddAccount } from '@/data/usecases'

type HttpRequest = { username: string, password: string }
type Model = Error | { msg: string }

export class CreateAccountController extends Controller {
  constructor (private readonly dbAddAccount: DbAddAccount) {
    super()
  }

  async perform ({ password, username }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const check = await this.dbAddAccount.add({ username, password })
      if (check) return ok({ msg: 'Sucesso' })
      return badRequest(new Error('User already castrated'))
    } catch (error) {
        
      return serverError(error)
    }
  }

  override buildValidators ({ password, username }: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: username, fieldName: 'username' }).required().minCharacters(3).build(),
      ...Builder.of({ value: password, fieldName: 'password' }).required().minCharacters(8).passwordLetterAndNumber().build()

    ]
  }
}
