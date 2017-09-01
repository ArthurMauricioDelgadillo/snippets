export class ValidationRuleMessage {
    constructor(key, messageCallback) {
        this.key = key
        this.messageCallback = messageCallback
    }

    message(error, displayName) {
        return this.messageCallback(error, displayName)
    }
}

class ValidationRuleMessages {
    constructor() {
        this.defaultValidationRuleMessage = new ValidationRuleMessage('default',
            (error, displayName) => `The ${displayName} field is invalid.`)
        this.data = [
            new ValidationRuleMessage('required',
                (error, displayName) => `The ${displayName} field is required.`),
            new ValidationRuleMessage('minlength',
                (error, displayName) => `The ${displayName} must be at least ${error.requiredLength} characters long, but was ${error.actualLength}.`),
            new ValidationRuleMessage('maxlength',
                (error, displayName) => `The ${displayName} cannot be more than ${error.requiredLength} characters long, but was ${error.actualLength}.`),
            new ValidationRuleMessage('pattern',
                (error, displayName) => `The ${displayName} format is invalid.`),
            new ValidationRuleMessage('min',
                (error, displayName) => `The ${displayName} must be at least ${error.min}, but was ${error.actual}.`),
            new ValidationRuleMessage('max',
                (error, displayName) => `The ${displayName} cannot be more than ${error.max}, but was ${error.actual}.`),
            new ValidationRuleMessage('email',
                (error, displayName) => `The ${displayName} must be a valid email address.`)
        ]
    }

    get(error) {
        return this.data.find(x => x.key === error.key) || this.defaultValidationRuleMessage
    }

    add(error) {
        this.data.push(error)
    }
}

export const validationRuleMessages = new ValidationRuleMessages()
