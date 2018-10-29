import DictionaryUnitItem from "./dictionary-unit.item";

export default class UserPhraseItem extends DictionaryUnitItem {
  private _id: string;
  private _phrase: string;
  private _translation: string;

  constructor(id: string, phrase: string, translation: String, progress: number, lastDateStudy: Date) {
    super(progress, lastDateStudy);
    this._id = id;
    this._phrase = phrase;
    this._translation;
  }

  get id() {
    return this._id;
  }

  get phrase() {
    return this._phrase;
  }

  get translation() {
    return this._translation;
  }

  set id(id: string) {
    this._id = id;
  }

  set phrase(phrase: string) {
    this._phrase = phrase;
  }

  set translation(translation: string) {
    this._translation = translation;
  }
}