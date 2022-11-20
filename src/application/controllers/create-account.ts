import { Controller } from '@/application/controllers'
import { HttpResponse, ok, badRequest, serverError } from '@/application/helpers'

import { DbAddAccount } from '@/data/usecases'
import { Validator } from '@/application/validation'

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
      return badRequest(new Error('Usuario ja castrado'))
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }

  override buildValidators (): Validator[] {
    return [

    ]
  }
}
