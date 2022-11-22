import { DbCheckToken } from '@/data/usecases'
import { PgLoadkById } from '@/infra/repos/postgres/'
export const makeDbCheckToken = (): DbCheckToken => {
    return new DbCheckToken(
        new PgLoadkById()
    )
}
