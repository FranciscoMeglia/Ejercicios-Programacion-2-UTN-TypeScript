import { Figura } from "./Figura";

export class Cuadrado extends Figura {
  private _lado: number;

  constructor(nombre: string, color: string, lado: number) {
    super(nombre, color);
    this._lado = lado;
  }

  public setLado(value: number): void {
    this._lado = value;
  }

  public getLado(): number {
    return this._lado;
  }

  public getPerimetro(): number {
    return this._lado * 4;
  }

  public getArea(): number {
    return this._lado * this._lado;
  }
}
