import { Traccion } from "./Traccion";

export class RuedaCaucho extends Traccion {
  private _sensores: string;

  constructor(restaHp: number, permiteRodado: number, sensores: string) {
    super(restaHp, permiteRodado);
    this._sensores = sensores;
  }

  public setSensores(value: string): void {
    this._sensores = value;
  }

  public getSensores(): string {
    return this._sensores;
  }

  public infoExtra(): string {
    return "Posee sensores adicionales";
  }
}
