import { Controller } from '@/application/controllers'
import { HttpResponse, ok, badRequest, serverError } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'


import { DbSaveTransactions } from '@/data/usecases'

type HttpRequest = { usernameCred: string, value: number, userId: string }
type Model = Error | { msg: string }

export class TransferController extends Controller {
    constructor(private readonly dbSaveTransactions: DbSaveTransactions) {
        super()
    }

    async perform({ value, usernameCred, userId }: HttpRequest): Promise<HttpResponse<Model>> {
        const idDebi = parseInt(userId)

        try {
            const check = await this.dbSaveTransactions.save({ idDebi, usernameCred, value })
            if (check) return ok({ msg: 'sucesso' })
            return badRequest(new Error('erro'))
        } catch (error) {
            const vref = (error as Error).message
            if (vref == 'user id not found' || vref == 'insufficient balance' || vref == 'Creator user does not exist') return badRequest(new Error(vref))
            return serverError(error)
        }
    }
    override buildValidators({ usernameCred, value }: HttpRequest): Validator[] {
        return [
            ...Builder.of({ value: usernameCred, fieldName: 'username' }).required().build(),
            ...Builder.of({ value: value, fieldName: 'balance' }).required().build(),
        ]
    }

}