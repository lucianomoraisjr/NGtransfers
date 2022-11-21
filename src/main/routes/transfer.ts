
import { adaptExpressRoute as adapt } from '@/main/adpters'
import {makeTransferController } from '@/main/factories/application/controller'
import { Router } from 'express'
import { auth } from '@/main/middlewares'

export default (router: Router): void => {
  router.post('/transfer', auth, adapt(makeTransferController()))
}
