
import { adaptExpressRoute as adapt } from '@/main/adpters'
import { makeSearchTransactionsController} from '@/main/factories/application/controller'
import { Router } from 'express'
import { auth } from '@/main/middlewares'



export default (router: Router): void => {
  router.get('/search', auth , adapt(makeSearchTransactionsController()))
}
