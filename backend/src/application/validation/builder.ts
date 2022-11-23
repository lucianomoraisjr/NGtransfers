import { Validator, RequiredString, MinCharacters, LetterAndNumber } from '@/application/validation'

export class ValidationBuilder {
  private constructor (
    private readonly value: any,
    private readonly fieldName: string,
    private readonly validators: Validator[] = []
  ) {}

  static of ({ value, fieldName }: { value: any, fieldName: string }): ValidationBuilder {
    return new ValidationBuilder(value, fieldName)
  }

  required (): ValidationBuilder {
    this.validators.push(new RequiredString(this.value, this.fieldName))

    return this
  }

  minCharacters (amount: number): ValidationBuilder {
    this.validators.push(new MinCharacters(amount, this.value, this.fieldName))
    return this
  }

  passwordLetterAndNumber (): ValidationBuilder {
    this.validators.push(new LetterAndNumber(this.value, this.fieldName))
    return this
  }

  build (): Validator[] {
    return this.validators
  }
}
