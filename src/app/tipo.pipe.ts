import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(tipo: number): string {
    if (tipo == 1) {
      return "Desayunos";
    } else if (tipo == 2) {
      return "Platos Fuertes";
    } else if (tipo == 3) {
      return "Cenas";
    } else if (tipo == 4) {
      return "Bebidas";
    } else if (tipo == 5) {
      return "Guarniciones";
    } else if (tipo == 6) {
      return "Sopas";
    } else if (tipo == 7) {
      return "Ensaladas";
    } else if (tipo == 8) {
      return "Antojos";
    } else if (tipo == 9) {
      return "Postres";
    }else if (tipo == 10) {
      return "Comidas";
    }else {
      return "Desconocida!";
    }

  }
}
