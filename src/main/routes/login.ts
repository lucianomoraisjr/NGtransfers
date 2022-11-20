
import { adaptExpressRoute as adapt } from '@/main/adpters'
import { makeLoginController } from '@/main/factories/application/controller'
import { Router } from 'express'
import { auth } from '@/main/middlewares'

export default (router: Router): void => {
  router.post('/login', auth, adapt(makeLoginController()))
}
