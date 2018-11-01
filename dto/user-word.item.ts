import WordItem from './word.item';
import DictionaryUnitItem from './dictionary-unit.item';

export default class UserWordItem extends DictionaryUnitItem {
    private _id: string;
    private _wordItem: WordItem;
    private _userTranslations: string[];

    constructor(id: string, word: WordItem, userTranslations: string[], progress: number, lastDateStudy: Date) {
        super(progress, lastDateStudy);
        this._id = id;
        this._wordItem = word;
        this._userTranslations = userTranslations;
    }

    get object() {
        return {
            id: this._id,
            wordItem: this._wordItem,
            userTranslations: this._userTranslations
        }
    }

    get id(): string {
        return this._id;
    }

    get userTranslations(): string[] {
        return this._userTranslations;
    }

    set userTranslations(userTranslations) {
        this._userTranslations = userTranslations;
    }
}