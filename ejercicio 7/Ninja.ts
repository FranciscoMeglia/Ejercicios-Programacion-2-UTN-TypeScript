export class Ninja {
  private _arteMarcial: string;
  private _arma: string;
  private _fuerza: number;
  private _salto: number;

  constructor(
    arteMarcial: string,
    arma: string,
    fuerza: number,
    salto: number
  ) {
    this._arteMarcial = arteMarcial;
    this._arma = arma;
    this._fuerza = fuerza;
    this._salto = salto;
  }
  public setArteMarcial(value: string): void {
    this._arteMarcial = value;
  }

  public setArma(value: string): void {
    this._arma = value;
  }

  public setFuerza(value: number): void {
    this._fuerza = value;
  }

  public setSalto(value: number): void {
    this._salto = value;
  }

  public getArteMarcial(): string {
    return this._arteMarcial;
  }

  public getArma(): string {
    return this._arma;
  }

  public getFuerza(): number {
    return this._fuerza;
  }

  public getSalto(): number {
    return this._salto;
  }

  public saltar(multiplicador: number): number {
    return this._salto * multiplicador;
  }

  public ataque() {
    return `Arma del ninja: ${this._arma} , arte marcial: ${this._arteMarcial}`;
  }
}
