import { Traccion } from "./Traccion";

export class Robot {
  private _numeroSerie: number;
  private _potenciaTraccion: number;
  private _sistemaTraccion: Traccion;

  constructor(
    numeroSerie: number,
    potenciaTraccion: number,
    sistemaTraccion: Traccion
  ) {
    this._numeroSerie = numeroSerie;
    this._potenciaTraccion = potenciaTraccion;
    this._sistemaTraccion = sistemaTraccion;
  }

  public setNumeroSerie(value: number): void {
    this._numeroSerie = value;
  }

  public setPotenciaTraccion(value: number): void {
    this._potenciaTraccion = value;
  }

  public setSistemaTraccion(value: Traccion): void {
    this._sistemaTraccion = value;
  }

  public getNumeroSerie(): number {
    return this._numeroSerie;
  }

  public getPotenciaTraccion(): number {
    return this._potenciaTraccion;
  }

  public getSistemaTraccion(): Traccion {
    return this._sistemaTraccion;
  }

  private potenciaTraccionFinal(): number {
    return this._potenciaTraccion - this._sistemaTraccion.getRestaHp();
  }

  public mostrarInfo(): string {
    return `Numero de serie: ${
      this._numeroSerie
    } / potencia de traccion final: ${this.potenciaTraccionFinal()} / tipo de traccion ${
      this._sistemaTraccion.constructor.name
    } / puede avanzar ${this._sistemaTraccion.getPermiteRodado()} / info adicional ${this._sistemaTraccion.infoExtra()}`;
  }
}
