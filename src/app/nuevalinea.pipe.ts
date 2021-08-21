import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nuevalinea'
})
export class NuevalineaPipe implements PipeTransform {

  transform(parrafo: string): string {
    let oracion = parrafo.split(".");
    let oracionesunidas= oracion.join('<br/>')
    let parrafoEnOraciones = oracionesunidas;

    return parrafoEnOraciones;
  }

}
