export default class Symbol {
  private _code: string = '';
  private _description: string = '';

  constructor(description: string, code: string) {
    this._description = description;
    this._code = code;
  }

  get Code(): string {
    return this._code;
  }

  get Description(): string {
    return this._description;
  }
}
