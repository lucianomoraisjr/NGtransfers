
import { adaptExpressRoute as adapt } from '@/main/adpters'
import { makeCreateAccountController } from '@/main/factories/application/controller'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/account/create', adapt(makeCreateAccountController()))
}
