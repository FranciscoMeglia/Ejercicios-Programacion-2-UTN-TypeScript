export abstract class Traccion {
  private _restaHp: number;
  private _permiteRodado: number;

  constructor(restaHp: number, permiteRodado: number) {
    this._restaHp = restaHp;
    this._permiteRodado = permiteRodado;
  }

  public setRestaHp(value: number): void {
    this._restaHp = value;
  }

  public setPermiteRodado(value: number): void {
    this._permiteRodado = value;
  }

  public getRestaHp(): number {
    return this._restaHp;
  }

  public getPermiteRodado(): number {
    return this._permiteRodado;
  }

  public abstract infoExtra(): string;
}
