export class Herramienta {
  private _modelo: string;
  private _peso: number;

  constructor(modelo: string, peso: number) {
    this._modelo = modelo;
    this._peso = peso;
  }

  public setModelo(value: string): void {
    this._modelo = value;
  }

  public setPeso(value: number): void {
    this._peso = value;
  }

  public getModelo(): string {
    return this._modelo;
  }

  public getPeso(): number {
    return this._peso;
  }
}
