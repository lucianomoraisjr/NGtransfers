import { Controller } from '@/application/controllers'
import { HttpResponse, ok, badRequest, serverError } from '@/application/helpers'


import { DbAuthentication } from '@/data/usecases'

type HttpRequest = { username: string, password: string }
type Model = Error | { accessToken: string,username: string}

export class LoginController extends Controller {
  constructor (private readonly dbAuthentication: DbAuthentication) {
    super()
  }

  async perform ({ password, username }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const check = await this.dbAuthentication.auth({ username, password })
      if (check) return ok(check)
      return badRequest(new Error('wrong username or password'))
    } catch (error) {
      
      return serverError(error)
    }
  }

  
}
