import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './lista-items';
import { Observable, of } from 'rxjs';
import { TipoEnum } from './categorias';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems():Observable<Item[]>{
    const items = of(ITEMS);
    return items;
  }

  getItemsTipo(tipo: TipoEnum): Observable<Item[]>{
    let result = ITEMS.filter(i => i.tipo.find((a)=> a === tipo));
    console.log("Tipo:"+tipo)
    console.log(result);
    return of(result);
  }
  
  getItem(id: number): Observable<Item> {
    // For now, assume that an item with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const item = ITEMS.find(i => i.id === id)!;
    return of(item);
  }

  getItemsVarios(ids: number[]): Observable<Item[]> {
    // For now, assume that an item with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    let result: Item []=[];
    for (let index = 0; index < ids.length; index++) {
      result.push(ITEMS.find(i => i.id === ids[index])!);
    }
    return of(result);
  }

  


}
