/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { RestrictionPassword } from '@/application/errors'

export class LetterAndNumber {
  constructor (
    private readonly value: string,
    readonly fieldName: string
  ) { }

  validate (): Error | undefined {
    const regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})(?!.*\s)[0-9a-zA-Z]*$/
    if (!regex.exec(this.value)) return new RestrictionPassword(this.fieldName)
  }
}
