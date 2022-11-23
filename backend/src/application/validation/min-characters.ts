import { MinCharacter } from '@/application/errors'

export class MinCharacters {
  constructor (
    private readonly minCharacter: number,
    private readonly value: string,
    readonly fieldName: string
  ) {}

  validate (): Error | undefined {
    if (this.value.length < this.minCharacter) return new MinCharacter(this.minCharacter, this.fieldName)
  }
}
