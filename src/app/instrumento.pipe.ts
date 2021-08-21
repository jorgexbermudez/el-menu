import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'instrumento'
})
export class InstrumentoPipe implements PipeTransform {

  transform(instrumento: number): string {
    if (instrumento == 1) {
      return "Estufa";
    } else if (instrumento == 2) {
      return "Horno";
    }else {
      return "Ninguno";
    }

  }

}
