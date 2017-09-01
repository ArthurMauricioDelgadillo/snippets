import { humanize, decapitalize } from 'underscore.string'

class DisplayName {
    constructor() {
        this.data = []
    }

    for(propertyName, customDisplayName) {
        this.data[propertyName] = customDisplayName
    }

    of(propertyName) {
        return this.data[propertyName] || this.defaultDisplayName(propertyName)
    }

    defaultDisplayName(propertyName) {
        return decapitalize(humanize(propertyName))
    }
}

export const displayName = new DisplayName()
