import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dificultad'
})
export class DificultadPipe implements PipeTransform {

  transform(dificultad: number): string {
    if (dificultad == 1) {
      return "Principiante";
    } else if (dificultad == 2) {
      return "Media";
    }else if (dificultad == 3) {
      return "Avanzada";
    } else if (dificultad == 4){
      return "Masterchef";
    }else{
      return "Desconocida!";
    }

  }

}
