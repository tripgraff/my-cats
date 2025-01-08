class Api {
    constructor(name) {
        this.name = name;
        this.path = 'http://localhost:3000/cats';
    }
    getCats() {
        return fetch(`${this.path}`);
    }
    getCat(id) {
        return fetch(`${this.path}/${id}`);
    }
    // getIds() {
    //     return fetch(`${this.path}`)
    // }
    addCat(body) {
        return fetch(`${this.path}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
    updCat(body, id) {
        return fetch(`${this.path}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
    delCat(id) {
        return fetch(`${this.path}/${id}`, {
            method: 'DELETE'
        });
    }
}

export default Api;