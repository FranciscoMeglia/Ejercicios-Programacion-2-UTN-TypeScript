export class Articulo {
  private _marca: string;
  private _modelo: string;

  constructor(marca: string, modelo: string) {
    this._marca = marca;
    this._modelo = modelo;
  }

  public setMarca(value: string): void {
    this._marca = value;
  }

  public setModelo(value: string): void {
    this._modelo = value;
  }

  public getMarca(): string {
    return this._marca;
  }

  public getModelo(): string {
    return this._modelo;
  }
}
