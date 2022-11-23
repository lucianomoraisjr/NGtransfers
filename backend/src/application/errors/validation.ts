export class RequiredFieldError extends Error {
  constructor (fieldName?: string) {
    const message = fieldName === undefined
      ? 'Field required'
      : `The field ${fieldName} is required`
    super(message)
    this.name = 'RequiredFieldError'
  }
}

export class InvalidMimeTypeError extends Error {
  constructor (allowed: string[]) {
    super(`Unsupported file. Allowed extensions: ${allowed.join(', ')}`)
    this.name = 'InvalidMimeTypeError'
  }
}

export class MinCharacter extends Error {
  constructor (character: number, fieldName: string) {
    super(`${fieldName} must contain at least ${character} characters`)
    this.name = 'MinCharactersError'
  }
}

export class RestrictionPassword extends Error {
  constructor (fieldName: string) {
    super(`${fieldName} must contain capital letter and number`)
    this.name = 'RestrictionPassword'
  }
}
