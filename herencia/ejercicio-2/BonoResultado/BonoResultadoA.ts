import { BonoResultado } from "./BonoResultado";

export class BonoResultadoA extends BonoResultado {
  private _objetivo: number;
  private _sueldoNeto: number;
  constructor(objetivo: number, sueldoNeto: number) {
    super();
    this._objetivo = objetivo;
    this._sueldoNeto = sueldoNeto;
  }

  public setObjetivo(value: number): void {
    this._objetivo = value;
  }

  public setSueldoNeto(value: number): void {
    this._sueldoNeto = value;
  }

  public getObjetivo(): number {
    return this._objetivo;
  }

  public getSueldoNeto(): number {
    return this._sueldoNeto;
  }

  public calcular(): number {
    if (this._objetivo === 100) {
      return this._sueldoNeto * 0.1; // solo el 10% del neto
    }
    if (this._objetivo >= 80 && this._objetivo <= 99) {
      return 800;
    }
    return 0;
  }
}
