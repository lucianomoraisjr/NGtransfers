export interface Decrypter {
  decrypt: (ciphertext: string) => Promise<number>
}
