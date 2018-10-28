export default class UserPhraseItem {
  private _id: string;
  private _phrase: string;
  private _translation: string;

  constructor(id: string, phrase: string, translation: String) {
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