import { Item } from "./Item";

export class Lavarropa extends Item {
  private _voltaje: number;
  private _ledOlcd: boolean;
  private _inteligente: boolean;

  constructor(
    id: number,
    descripcion: string,
    dimensiones: number,
    voltaje: number,
    ledOlcd: boolean,
    inteligente: boolean
  ) {
    super(id, descripcion, dimensiones);
    this._voltaje = voltaje;
    this._ledOlcd = ledOlcd;
    this._inteligente = inteligente;
  }

  public setVoltaje(value: number): void {
    this._voltaje = value;
  }

  public setLedOlcd(value: boolean): void {
    this._ledOlcd = value;
  }

  public setInteligente(value: boolean): void {
    this._inteligente = value;
  }

  public getVoltaje(): number {
    return this._voltaje;
  }

  public getLedOlcd(): boolean {
    return this._ledOlcd;
  }

  public getInteligente(): boolean {
    return this._inteligente;
  }

  public mostrarItem(): string {
    return `Lavarropa modelo: ${this.getDescripcion()}`;
  }
}
