export default class CategoryItem {
    private _id: String;
    private _name: String;

    constructor(id: String, name: String) {
        this._id = id;
        this._name = name;
    }
    
    public get id(): String {
        return this._id;
    }
    public get name(): String {
        return this._name;
    }
    public set name(value: String) {
        this._name = value;
    }

    public get object() {
        return {
            id: this._id,
            name: this._name
        }
    }
}