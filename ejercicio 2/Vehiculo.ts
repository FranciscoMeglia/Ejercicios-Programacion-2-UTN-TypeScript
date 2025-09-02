export class Vehiculo {
  public _marca: string;
  public _modelo: string;
  private _patente: string;

  constructor(marca: string, modelo: string, patente: string) {
    this._marca = marca;
    this._modelo = modelo;
    this._patente = patente;
  }

  public setMarca(value: string): void {
    this._marca = value;
  }

  public setModelo(value: string): void {
    this._modelo = value;
  }

  public setPatente(value: string): void {
    this._patente = value;
  }

  public getMarca(): string {
    return this._marca;
  }

  public getModelo(): string {
    return this._modelo;
  }

  public getPatente(): string {
    return this._patente;
  }
}
