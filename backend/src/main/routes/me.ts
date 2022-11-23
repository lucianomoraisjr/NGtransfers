
import { adaptExpressRoute as adapt } from '@/main/adpters'
import {makeMeController } from '@/main/factories/application/controller'
import { Router } from 'express'
import { auth } from '@/main/middlewares'

export default (router: Router): void => {
  router.get('/me', auth, adapt(makeMeController()))
}
