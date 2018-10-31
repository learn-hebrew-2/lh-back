import mongoose from 'mongoose';
import Joi from 'joi';

export default class WordItem {
    private _id: string;
    private _word: string;
    private _translations: string[];

    constructor(id: string, word: string, translations: string[]){
        this._id = id;
        this._word = word;
        this._translations = translations;
    }

    static get schema() {
        return new mongoose.Schema({
            word: {
                type: String,
                required: true,
                maxlength: 20
            },
            translations: {
                type: [String],
                required: true,
                maxlength: 20
            }
        });
    }

    static get model() {
        const schema = WordItem.schema;
        return mongoose.model('GlobalWord', schema);
    }

    static validate(word: WordItem) {
        const schema = {
            word: Joi.string().required().max(20),
            translations: Joi.array().items(Joi.string()).min(1).max(20).required()
        }
        return Joi.validate(word, schema);
    }

    get object() {
        return {
            id: this._id,
            word: this._word,
            translations: this._translations
        }
    }
    
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
}