// TODO: test it
export class ValidationErrors {
    constructor(...validationErrors) {
        validationErrors.forEach(x => {
            this[x.propertyName] = x
        });
    }
}