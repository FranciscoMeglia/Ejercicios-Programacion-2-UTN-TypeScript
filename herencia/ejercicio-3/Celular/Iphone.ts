import { Persona } from "../Persona/Persona";
import { Celular } from "./Celular";

export class Iphone extends Celular {
  constructor() {
    super("Iphone", 5, 0.1);
  }

  // Calcular consumo de llamada
  public calcularConsumo(duracion: number): number {
    return 0.1 * duracion;
  }

  // Enviar una llamda
  public enviarLlamada(receptor: Persona, duracion: number): string {
    if (receptor.getCelular().estaApagado()) {
      return `No se ha podido comunicar con ${receptor.getNombre()} ya que su celular se encuentra apagado`;
    }
    this.consumirBateria(duracion);
    return "Llamada concretada con exito";
  }

  // Recibir una llamada
  public recibirLlamada(receptor: Persona, duracion: number): string {
    if (this.estaApagado()) {
      return `Mi celular esta apagado , comuniquese en otro momento`;
    }
    this.consumirBateria(duracion);
    return "Llamada recibida con exito";
  }
}
