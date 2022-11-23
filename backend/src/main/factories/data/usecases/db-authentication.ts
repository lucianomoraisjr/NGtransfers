import {DbAuthentication} from '@/data/usecases/'
import {PgLoadkByUsername} from '@/infra/repos/postgres'
import{BcryptAdapter,JwtAdapter} from "@/infra/cryptography"
import { env } from '@/main/config/env'
export const makeDbAuthentication = ():DbAuthentication=>{

    return new DbAuthentication(
        new PgLoadkByUsername(),
        new BcryptAdapter(12),
        new JwtAdapter(env.jwtSecret)
    )

}