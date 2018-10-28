import WordItem from './word.item';

export default class UserWordItem extends WordItem {
    private _progress: number;
    private _userTranslations: string[];
    private _lastDateStudy: Date;

    constructor() {
        super();
    }

    get progress(): number {
        return this._progress;
    }

    set progress(progress) {
        this._progress = progress;
    }

    get userTranslations(): string[] {
        return this._userTranslations;
    }

    set userTranslations(userTranslations) {
        this._userTranslations = userTranslations;
    }

    get lastDateStudy(): Date {
        return this._lastDateStudy;
    }

    set lastDateStudy(lastDateStudy) {
        this._lastDateStudy = lastDateStudy;
    }
}