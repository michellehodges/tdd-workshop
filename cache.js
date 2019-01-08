module.exports = class Cache {
    constructor() {
        this.collection = {}
    }

    set(key, value) {
        this.collection[key] = value 
        return true
    }

    get(key) {
        return this.collection[key]
    }
}
