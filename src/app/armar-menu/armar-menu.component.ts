import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-armar-menu',
  templateUrl: './armar-menu.component.html',
  styleUrls: ['./armar-menu.component.css']
})
export class ArmarMenuComponent implements OnInit {
  dias: number = 0;
  desayuno: string = '';
  comida: string = '';
  sopa: string = '';
  ensalada: string = '';
  guarnicion: string = '';
  cena: string = '';
  desayunoItems: Item[] = [];
  desayunosRandom: number[] = [];
  comidaItems: Item[] = [];
  comidasRandom: number[] = [];
  sopaItems: Item[] = [];
  sopasRandom: number[] = [];
  ensaladaItems: Item[] = [];
  ensaladasRandom: number[] = [];
  guarnicionItems: Item[] = [];
  guarnicionesRandom: number[] = [];
  cenaItems: Item[] = [];
  cenasRandom: number[] = [];
  indexTotal: number[] = [];


  constructor(private route: ActivatedRoute, private itemService: ItemService) { }

  queryParam: string = '';
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.dias = params['dias'];
      this.desayuno = params['desayuno'];
      this.comida = params['comida'];
      this.sopa = params['sopa'];
      this.ensalada = params['ensalada'];
      this.guarnicion = params['guarnicion'];
      this.cena = params['cena'];
      this.getItems();
    });
  }


  getItems(): void {
    if (this.desayuno == 'true') {
      this.itemService.getItemsTipo(1)
        .subscribe(items => this.desayunoItems = items);
      this.desayunosRandom = this.randomIndexes(this.desayunoItems);
    }
    if (this.comida == 'true') {
      this.itemService.getItemsTipo(2)
        .subscribe(items => this.comidaItems = items);
      this.comidasRandom = this.randomIndexes(this.comidaItems);
    }
    if (this.sopa == 'true') {
      this.itemService.getItemsTipo(6)
        .subscribe(items => this.sopaItems = items);
      this.sopasRandom = this.randomIndexes(this.sopaItems);
    }
    if (this.ensalada == 'true') {
      this.itemService.getItemsTipo(7)
        .subscribe(items => this.ensaladaItems = items);
      this.ensaladasRandom = this.randomIndexes(this.ensaladaItems);
    }
    if (this.guarnicion == 'true') {
      this.itemService.getItemsTipo(5)
        .subscribe(items => this.guarnicionItems = items)
      this.guarnicionesRandom = this.randomIndexes(this.guarnicionItems);
    }
    if (this.cena == 'true') {
      this.itemService.getItemsTipo(3)
        .subscribe(items => this.cenaItems = items)
      this.cenasRandom = this.randomIndexes(this.cenaItems);
    }
  }

  randomIndexes(lista: Item[]): number[] {
    var indexes: number[] = [];
    for (let index = 0; index < this.dias; index++) {
      var result = (Math.floor(Math.random() * lista.length))
      indexes.push(result);
    }
    this.indexTotal = indexes;
    return indexes;
  }


}
