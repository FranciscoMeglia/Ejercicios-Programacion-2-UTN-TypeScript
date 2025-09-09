import { Figura } from "./Figura";

export class Circulo extends Figura {
  public _radio: number;

  constructor(nombre: string, color: string, radio: number) {
    super(nombre, color);
    this._radio = radio;
  }

  public setRadio(value: number): void {
    this._radio = value;
  }

  public getRadio(): number {
    return this._radio;
  }

  public getPerimetro(): number {
    return 2 * Math.PI * this._radio;
  }

  public getArea(): number {
    return Math.PI * this._radio * this._radio;
  }
}
