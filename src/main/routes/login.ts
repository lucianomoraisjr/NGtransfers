
import { adaptExpressRoute as adapt } from '@/main/adpters'
import { makeLoginController } from '@/main/factories/application/controller'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/login', adapt(makeLoginController()))
}
