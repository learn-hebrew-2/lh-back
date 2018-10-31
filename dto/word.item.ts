import mongoose from 'mongoose';
import Joi from 'joi';

export default class WordItem {
    private _id: string;
    private _word: string;
    private _translations: string[];
    private _mongoSchema: mongoose.Schema;
    private _mongoModel;

    constructor(id: string, word: string, translations: string[]){
        this._id = id;
        this._word = word;
        this._translations = translations;
        this._mongoModel = mongoose.model('GlobalWord', this._mongoSchema);
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

    static getMongoSchema() {
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

    static getMongoModel(schema) {
        return mongoose.model('GlobalWord', schema);
    }

    static validate(wordSchema) {
        const schema = {
            word: Joi.string().required().max(20),
            translations: Joi.array().items(Joi.string()).min(1).max(20).required()
        }
        return Joi.validate(wordSchema, schema);
    }

}