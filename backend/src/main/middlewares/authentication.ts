import { adaptExpressMiddleware } from '@/main/adpters'
import { makeAuthenticationMiddleware } from '@/main/factories/application/middlewares'

export const auth = adaptExpressMiddleware(makeAuthenticationMiddleware())
