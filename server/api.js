class Api {
    constructor(name) {
        this.name = name;
        this.path = 'http://localhost:3000/cats'
    }
    getCats() {
        return fetch(`${this.path}`)
    }
    getCat(id) {
        return fetch(`${this.path}/${id}`)
    }
    // getIds() {
    //     return fetch(`${this.path}`)
    // }
}