import { PgCheckByUsername } from '@/infra/repos/postgres'

export const makePgCheckByUsername = (): PgCheckByUsername => {
  return new PgCheckByUsername()
}
