import { Controller } from '@/application/controllers'
import { HttpResponse, ok, badRequest, serverError } from '@/application/helpers'


import { DbCheckToken } from '@/data/usecases'

type HttpRequest = { userId: string }
type Model = Error | {
  username: string,
  account: account
}
type account = {
  balance: number
  id: number
}

export class MeController extends Controller {
  constructor(private readonly dbCheckToken: DbCheckToken) {
    super()
  }

  async perform({ userId }: HttpRequest): Promise<HttpResponse<Model>> {
    const id = parseInt(userId)
    try {
      const check = await this.dbCheckToken.check({ id })
      if (check) return ok(check)
      return badRequest(new Error('invalid token'))
    } catch (error) {
      
      return serverError(error)
    }
  }


}
