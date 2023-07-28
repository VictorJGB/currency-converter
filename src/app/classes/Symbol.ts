export default class Symbol {
  private _code: string = '';
  private _description: string = '';

  constructor(code: string, description: string) {
    this._code = code;
    this._description = description;
  }

  get Code(): string {
    return this._code;
  }

  get Description(): string {
    return this._description;
  }
}
