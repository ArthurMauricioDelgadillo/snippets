import {
    ValidationError,
    ValidationRuleMessage,
    validationRuleMessages,
    displayName
} from '../validation-messages'

const customValidationRuleMessage = new ValidationRuleMessage('forbiddenName',
    (error, displayName) => `The ${displayName} cannot be ${error.value}, he is forbidden here :(`
)

validationRuleMessages.add(customValidationRuleMessage)
displayName.for('email', 'E-mail Address')

describe('Validation Error', () => {
    const data = [
        {
            validationError: new ValidationError('firstName', { key: 'required' }),
            message: 'The first name field is required.'
        },
        {
            validationError: new ValidationError('user_name', { key: 'minlength', requiredLength: 4, actualLength: 2 }),
            message: 'The user name must be at least 4 characters long, but was 2.'
        },
        {
            validationError: new ValidationError('email', { key: 'required' }),
            message: 'The E-mail Address field is required.'
        },
        {
            validationError: new ValidationError('email', { key: 'not existing key' }),
            message: 'The E-mail Address field is invalid.'
        },
        {
            validationError: new ValidationError('user-name', { key: 'forbiddenName', value: 'Bob squarepants' }),
            message: 'The user name cannot be Bob squarepants, he is forbidden here :('
        }
    ]

    it('get a formatted message ', () => {
        data.forEach(x => expect(x.validationError.message).toBe(x.message))
    })
})