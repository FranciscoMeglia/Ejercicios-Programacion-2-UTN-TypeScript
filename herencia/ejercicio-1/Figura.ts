export abstract class Figura {
  private _nombre: string;
  private _color: string;

  constructor(nombre: string, color: string) {
    this._nombre = nombre;
    this._color = color;
  }

  public setNombre(value: string): void {
    this._nombre = value;
  }

  public setColor(value: string): void {
    this._color = value;
  }

  public getNombre(): string {
    return this._nombre;
  }

  public getColor(): string {
    return this._color;
  }

  public abstract getPerimetro(): number;
  public abstract getArea(): number;
}
