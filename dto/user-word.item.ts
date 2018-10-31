import WordItem from './word.item';
import DictionaryUnitItem from './dictionary-unit.item';

export default class UserWordItem extends DictionaryUnitItem {
    private _wordItem: WordItem;
    private _userTranslations: string[];

    constructor(word: WordItem, userTranslations: string[], progress: number, lastDateStudy: Date) {
        super(progress, lastDateStudy);
        this._wordItem = word;
        this._userTranslations = userTranslations;
    }

    get object() {
        return {
            wordItem: this._wordItem,
            userTranslations: this._userTranslations
        }
    }

    get userTranslations(): string[] {
        return this._userTranslations;
    }

    set userTranslations(userTranslations) {
        this._userTranslations = userTranslations;
    }
}