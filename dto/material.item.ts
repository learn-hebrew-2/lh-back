import MaterialStatItem from "./material-stat.item";

export default class MaterialItem {
  private _id: string;
  private _title: string;
  private _categories: string[]; //category ids
  private _statistics: MaterialStatItem;

  constructor(id: string, title: string, categories: string[]) {
    this._id = id;
    this._title = title;
    this._categories = categories;
    this._statistics = new MaterialStatItem();
  }

  public get object() {
    return {
      id: this._id,
      title: this._title,
      categories: this._categories,
      statistics: this._statistics
    }
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get categories(): string[] {
    return this._categories;
  }

  public set categories(value: string[]) {
    this._categories = value;
  }

  public get statistics(): MaterialStatItem {
    return this._statistics;
  }
  
  public set statistics(value: MaterialStatItem) {
    this._statistics = value;
  }
}