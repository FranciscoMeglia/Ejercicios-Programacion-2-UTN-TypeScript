import { Figura } from "./Figura";

export class Triangulo extends Figura {
  private _lado1: number;
  private _lado2: number;
  private _lado3: number;

  constructor(
    nombre: string,
    color: string,
    lado1: number,
    lado2: number,
    lado3: number
  ) {
    super(nombre, color);
    this._lado1 = lado1;
    this._lado2 = lado2;
    this._lado3 = lado3;
  }

  public setLado1(value: number): void {
    this._lado1 = value;
  }

  public setLado2(value: number): void {
    this._lado2 = value;
  }

  public setLado3(value: number): void {
    this._lado3 = value;
  }

  public getLado1(): number {
    return this._lado1;
  }

  public getLado2(): number {
    return this._lado2;
  }

  public getLado3(): number {
    return this._lado3;
  }

  public getPerimetro(): number {
    return this._lado1 + this._lado2 + this._lado3;
  }

  public getArea(): number {
    const s = this.getPerimetro() / 2;

    const area = Math.sqrt(
      s * (s - this._lado1) * (s - this._lado2) * (s - this._lado3)
    );

    return area;
  }
}
