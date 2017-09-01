import { validationRuleMessages } from './rule-message'
import { displayName } from './display-name'

export class ValidationError {
    constructor(propertyName, error) {
        this.propertyName = propertyName
        this.error = error
    }

    get message() {
        return validationRuleMessages
            .get(this.error)
            .message(this.error, this.displayName)
    }

    get displayName() {
        return displayName.of(this.propertyName)
    }
}