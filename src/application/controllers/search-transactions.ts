import { Controller } from '@/application/controllers'
import { HttpResponse, ok, serverError } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { DbSearchTransactions } from '@/data/usecases'


type HttpRequest = {
    type?: string
    page: number
    userId: string
}
type Model = Error | [
    transactions: {
        type: string,
        username: string,
        value: number,
        date:Date,
      
    }[],
    amount: number,
    balance?:number
]

export class SearchTransactionsController extends Controller {
    constructor(private readonly dbAuthentication: DbSearchTransactions) {
        super()
    }

    async perform({ page, type, userId }: HttpRequest): Promise<HttpResponse<Model>> {
        const id = parseInt(userId)

        try {
            const check = await this.dbAuthentication.search({ page, type, id })
            return ok(check)

        } catch (error) {
            console.log(error)
            return serverError(error)
        }
    }
    override buildValidators ({page}: HttpRequest): Validator[] {
        return [
          ...Builder.of({ value: page, fieldName: 'page' }).required().build(),
          
        ]
      }

}
