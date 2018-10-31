import DictionaryUser from "../interfaces/dictionary.interface";
import UserWordItem from "../dto/user-word.item";
import WordItem from "../dto/word.item";
import UserPhraseItem from "../dto/user-phrase.item";
import * as mongoose from 'mongoose';
import { stringify } from "querystring";

export default class Dictionary implements DictionaryUser {
    addUserWord(word: string, translation: string[]): UserWordItem {
        throw new Error("Method not implemented.");
    }    
    removeUserWord(id: string): UserWordItem {
        throw new Error("Method not implemented.");
    }
    updateUserWordItem(wordItem: UserWordItem): UserWordItem {
        throw new Error("Method not implemented.");
    }
    getUserWords(first?: number, last?: number): UserWordItem[] {
        throw new Error("Method not implemented.");
    }
    getUserWordByPattern(regex: string): UserWordItem[] {
        throw new Error("Method not implemented.");
    }
    getUserWordTranslations(word: String): String[] {
        throw new Error("Method not implemented.");
    }
    addGlobalWord(req, res): WordItem {
        const { error } = WordItem.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        const schema = WordItem.getMongoSchema();
        let model = WordItem.getMongoModel(schema);
        model = model.save();
        return new WordItem(model._id, model.word, model.translations);
    }
    updateGlobalWord(wordItem: WordItem): WordItem {
        throw new Error("Method not implemented.");
    }
    getGlobalWords(first?: number, last?: number): WordItem[] {
        throw new Error("Method not implemented.");
    }
    getGlobalWordTranslations(word: string): string[] {
        throw new Error("Method not implemented.");
    }
    getGoogleApiWordTranslations(word: string): string[] {
        throw new Error("Method not implemented.");
    }
    setUserPhrase(phrase: string, translation: string): UserPhraseItem {
        throw new Error("Method not implemented.");
    }
    removeUserPhrase(id: string): UserPhraseItem {
        throw new Error("Method not implemented.");
    }
    updateUserPhraseItem(userPraseItem: UserPhraseItem): UserPhraseItem {
        throw new Error("Method not implemented.");
    }
    getAllUserPrases(): UserPhraseItem[] {
        throw new Error("Method not implemented.");
    }
    getUserPhraseByPattern(regex: string): UserPhraseItem[] {
        throw new Error("Method not implemented.");
    }
    getUserPhraseTranslation(phrase: String): String {
        throw new Error("Method not implemented.");
    }

    


}