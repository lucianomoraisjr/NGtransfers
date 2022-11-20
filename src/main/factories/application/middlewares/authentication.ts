import {JwtAdapter}  from '@/infra/cryptography'
import { AuthenticationMiddleware } from '@/application/middlewares'
import { env } from '@/main/config/env'

export const makeAuthenticationMiddleware = (): AuthenticationMiddleware => {
  const jwt = new JwtAdapter(env.jwtSecret)
  return new AuthenticationMiddleware(jwt)
}
