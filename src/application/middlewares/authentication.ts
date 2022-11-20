import { forbidden, HttpResponse, ok } from '@/application/helpers'
import { Middleware } from '@/application/middlewares'
import { RequiredString } from '@/application/validation'
import { Decrypter } from '@/data/protocols'

type HttpRequest = { authorization: string }
type Model = Error | { userId: string }


export class AuthenticationMiddleware implements Middleware {
  constructor (private readonly authorize: Decrypter) {}

  async handle ({ authorization }: HttpRequest): Promise<HttpResponse<Model>> {
    if (!this.validate({ authorization })) return forbidden()
    const [, token] = authorization.split(' ')
    try {
      const userId = await this.authorize.decrypt(token)
      return ok({ userId })
    } catch {
      return forbidden()
    }
  }

  private validate ({ authorization }: HttpRequest): boolean {
    const error = new RequiredString(authorization, 'authorization').validate()
    return error === undefined
  }
}
