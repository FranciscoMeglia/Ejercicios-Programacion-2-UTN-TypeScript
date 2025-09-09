import { Persona } from "../Persona/Persona";

export abstract class Celular {
  private _modelo: string;
  private _bateria: number;
  private _bateriaActual: number;
  private _perdidaBateria: number;

  constructor(modelo: string, bateria: number, perdidaBateria: number) {
    this._modelo = modelo;
    this._bateria = bateria;
    this._bateriaActual = bateria;
    this._perdidaBateria = perdidaBateria;
  }

  public setBateriaActual(value: number): void {
    this._bateriaActual = value;
  }

  public getModelo(): string {
    return this._modelo;
  }

  public getBateriaActual(): number {
    return this._bateriaActual;
  }

  public getPerdidaBateria(): number {
    return this._perdidaBateria;
  }

  // Metodos abstractos para enviar y recibir llamadas en cada celular
  public abstract enviarLlamada(receptor: Persona, duracion: number): string;
  public abstract recibirLlamada(emisor: Persona, duracion: number): string;
  public abstract calcularConsumo(duracion: number): number;

  // Metodos para acciones comunes como chequear si esta apagado / recargarlo / mostrar info del mismo
  protected consumirBateria(duracion: number) {
    const consumo = this.calcularConsumo(duracion);
    this._bateriaActual = Math.max(0, this._bateriaActual - consumo);
  }

  public estaApagado(): boolean {
    return this._bateriaActual <= 0;
  }

  public recargarCelular(): void {
    this._bateriaActual = this._bateria;
  }

  public mostrarInfo(): string {
    return `Modelo: ${this._modelo} , bateria: ${this._bateria} y perdida de bateria por llamada ${this._perdidaBateria}`;
  }
}
