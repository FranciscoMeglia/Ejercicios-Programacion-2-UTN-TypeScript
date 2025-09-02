import { Herramienta } from "./Herramienta";

export class Drone {
  private _modelo: string;
  private _velocidadMax: number;
  private _alturaMax: number;
  private _herramienta: Herramienta;

  constructor(
    modelo: string,
    velocidadMax: number,
    alturaMax: number,
    herramienta: Herramienta
  ) {
    this._modelo = modelo;
    this._velocidadMax = velocidadMax;
    this._alturaMax = alturaMax;
    this._herramienta = herramienta;
  }

  public setModelo(value: string): void {
    this._modelo = value;
  }

  public setVelocidadMax(value: number): void {
    this._velocidadMax = value;
  }

  public setAlturaMax(value: number): void {
    this._alturaMax = value;
  }

  public setHerramienta(value: Herramienta): void {
    this._herramienta = value;
  }

  public getModelo(): string {
    return this._modelo;
  }

  public getVelocidadMax(): number {
    return this._velocidadMax;
  }

  public getAlturaMax(): number {
    return this._alturaMax;
  }

  public getHerramienta(): Herramienta {
    return this._herramienta;
  }

  public obtenerVelocidadMax(): number {
    const peso = this._herramienta.getPeso();
    if (peso <= 200) return this._velocidadMax;

    const exceso = peso - 200;
    const bloques = Math.floor(exceso / 50);

    return this._velocidadMax * Math.pow(1 - 0.02, bloques);
  }

  public obtenerAlturaMax(): number {
    const peso = this._herramienta.getPeso();
    if (peso <= 200) return this._alturaMax;

    const exceso = peso - 200;
    const bloques = Math.floor(exceso / 50);

    return this._alturaMax * Math.pow(1 - 0.05, bloques);
  }

  public obtenerInformacion(): string {
    return `Modelo: ${
      this._modelo
    } , Herramienta: ${this._herramienta.getModelo()} , VelocidadMax: ${this.obtenerVelocidadMax()} , AlturaMax: ${this.obtenerAlturaMax()}`;
  }
}
