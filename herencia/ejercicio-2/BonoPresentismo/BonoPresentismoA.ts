import { BonoPresentismo } from "./BonoPresentismo";

export class BonoPresentismoA extends BonoPresentismo {
  private _faltas: number;

  constructor(faltas: number) {
    super();
    this._faltas = faltas;
  }

  public setFaltas(value: number): void {
    this._faltas = value;
  }

  public getFaltas(): number {
    return this._faltas;
  }

  public calcular(): number {
    if (this._faltas === 0) {
      return 1000;
    }
    if (this._faltas === 1) {
      return 450;
    }
    return 0;
  }
}
