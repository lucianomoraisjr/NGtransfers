export interface Encrypter {
  encrypt: (plaintext: number) => Promise<string>
}
