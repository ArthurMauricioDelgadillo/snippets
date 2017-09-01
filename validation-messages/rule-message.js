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
                (error, displayName) => `The ${displayName} must be at least ${error.requiredLength} characters long, but was ${error.actualLength}.`)
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
