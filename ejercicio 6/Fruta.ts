export class Fruta {
  private _color: string;
  private _peso: number;
  private _esEstacional: boolean;

  constructor(color?: string, peso?: number, esEstacional?: boolean) {
    this._color = color || "";
    this._peso = peso || 0;
    this._esEstacional = esEstacional || false;
  }

  public setColor(value: string): void {
    this._color = value;
  }

  public setPeso(value: number): void {
    this._peso = value;
  }

  public setEsEstacional(value: boolean): void {
    this._esEstacional = value;
  }

  public getColor(): string {
    return this._color;
  }

  public getPeso(): number {
    return this._peso;
  }

  public getEsEstacional(): boolean {
    return this._esEstacional;
  }

  public esComestible(): boolean {
    return this._peso < 200 && this._esEstacional;
  }
}
