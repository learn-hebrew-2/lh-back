import UserTypeItem from '../dto/user-type.item';
import UserWordItem from '../dto/user-word.item';
import UserPhraseItem from '../dto/user-phrase.item';

export default class UserItem {
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;
  private _type: UserTypeItem;
  private _materials: string[];
  private _words: UserWordItem[];
  private _phrases: UserPhraseItem[];

  constructor(id: string, name: string, email: string, password: string, type: UserTypeItem, materials: string[], words: UserWordItem[], phrases: UserPhraseItem[]) {

  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }

  public get type(): UserTypeItem {
    return this._type;
  }

  public set type(value: UserTypeItem) {
    this._type = value;
  }

  public get materials(): string[] {
    return this._materials;
  }

  public set materials(value: string[]) {
    this._materials = value;
  }

  public get words(): UserWordItem[] {
    return this._words;
  }

  public set words(value: UserWordItem[]) {
    this._words = value;
  }

  public get phrases(): UserPhraseItem[] {
    return this._phrases;
  }

  public set phrases(value: UserPhraseItem[]) {
    this._phrases = value;
  }
}