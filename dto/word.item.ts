export default class WordItem {
    private _id: string;
    private _word: string;
    private _translations: string[];
    
    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id; 
    }

    get word(): string {
        return this._word;
    }
    
    set word(word: string) {
        this._word = word; 
    }

    get translations() {
        return this._translations;
    }
    
    set translations(translations: string[]) {
        this._translations = translations; 
    }

    get type(): string {
        return this._type;
    }
    
    set type(type: string) {
        this._type = type; 
    }
}