export class User {
    constructor() {
        this._id = this['id'];
    }
    _id: string;
    username: string;
    firstname: string;
    lastname: string;
    dob: string;
    contact: string;
    name: string;
    email: string;
    role: string;
    diets: string[];
    intolerances: string[];
    excluded_ingredients: string[];
    included_ingredients: string[];
}