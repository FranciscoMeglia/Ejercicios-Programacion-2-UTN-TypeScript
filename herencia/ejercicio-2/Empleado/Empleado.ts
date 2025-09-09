import { BonoPresentismo } from "../BonoPresentismo/BonoPresentismo";
import { BonoResultado } from "../BonoResultado/BonoResultado";

export class Empleado {
  private _nombre: string;
  private _sueldoNeto: number;
  private _bonoPresentismo: BonoPresentismo;
  private _bonoResultado: BonoResultado;

  constructor(nombre: string, sueldoNeto: number) {
    this._nombre = nombre;
    this._sueldoNeto = sueldoNeto;
  }

  public setNombre(value: string): void {
    this._nombre = value;
  }

  public setSueldoNeto(value: number): void {
    this._sueldoNeto = value;
  }

  public setBonoPresentismo(value: BonoPresentismo): void {
    this._bonoPresentismo = value;
  }

  public setBonoResultado(value: BonoResultado): void {
    this._bonoResultado = value;
  }

  public getNombre(): string {
    return this._nombre;
  }

  public getSueldoNeto(): number {
    return this._sueldoNeto;
  }

  public getBonoPresentismo(): BonoPresentismo {
    return this._bonoPresentismo;
  }

  public getBonoResultado(): BonoResultado {
    return this._bonoResultado;
  }

  // METODO PARA CALCULAR EL SUELDO DE LOS EMPLEADOS
  public getSueldoFinal(): number {
    return (
      this._sueldoNeto +
      this._bonoPresentismo.calcular() +
      this._bonoResultado.calcular()
    );
  }
}
