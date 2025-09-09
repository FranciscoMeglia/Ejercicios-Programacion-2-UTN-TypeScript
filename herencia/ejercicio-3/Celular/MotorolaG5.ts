import { Persona } from "../Persona/Persona";
import { Celular } from "./Celular";

export class MotorolaG5 extends Celular {
  constructor() {
    super("MotorolaG5", 5, 0.25);
  }

  // Calcular consumo de llamada
  public calcularConsumo(duracion: number): number {
    return 0.25;
  }

  // Enviar una llamada
  public enviarLlamada(receptor: Persona, duracion: number): string {
    if (receptor.getCelular().estaApagado()) {
      return `No se ha podido comunicar con ${receptor.getNombre()} ya que su celular se encuentra apagado`;
    }
    this.consumirBateria(duracion);
    return "Llamada concretada con exito";
  }

  // Recibir una llamada
  public recibirLlamada(emisor: Persona, duracion: number): string {
    if (this.estaApagado()) {
      return `Mi celular esta apagado , comuniquese en otro momento`;
    }
    this.consumirBateria(duracion);
    return "Llamada recibida con exito";
  }
}
