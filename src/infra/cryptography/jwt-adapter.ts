import { Encrypter, Decrypter } from '@/data/protocols'

import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {}

  async encrypt (plaintext: number): Promise<string> {
    
    return jwt.sign({ id: plaintext }, this.secret)
  }

  async decrypt (ciphertext: string): Promise<number> {
    const payload = jwt.verify(ciphertext, this.secret) as any
    return payload.id
  }
}
