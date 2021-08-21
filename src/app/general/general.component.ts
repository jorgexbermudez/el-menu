import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TipoEnum } from '../categorias';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { TipoPipe } from '../tipo.pipe';
import { Location } from '@angular/common';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit, OnDestroy {

  items: Item[] = [];
  navigationSubscription;
  randomId: number=0;
  rutaTipo: number=0;

  calificacionSelected =0;
  dificultadSelected=0;
  instrumentoSelected=0;
  hambreSelected=0;
  preparacionSelected=0;
  saborSelected=0;

  constructor(private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
    
      // subscribe to the router events - storing the subscription so
    // we can unsubscribe later. 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.getItemsTipo();
        this.resetFiltros();
      }
    });
  }

  @Input() tipo?: TipoEnum;


  ngOnInit(): void {
  }

  getItemsTipo(): void {
    this.rutaTipo = Number(this.route.snapshot.paramMap.get('tipo'));
    this.itemService.getItemsTipo(this.rutaTipo)
      .subscribe(items => this.items = items)
      let max = this.items.length;
      let random = Math.floor(Math.random() * max) + 1;
      this.randomId = this.items[random].id;
  }


  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we  
    // don't then we will continue to run our initialiseInvites()   
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  setSaborSelected(sabor: number):void{
    this.saborSelected = sabor;
  }

  setCalificacionSelected(calificacion: number):void{
    this.calificacionSelected = calificacion;
  }

  setDificultadSelected(dificultad: number):void{
    this.dificultadSelected = dificultad;
  }

  setHambreSelected(hambre: number):void{
    this.hambreSelected = hambre;
  }

  setPreparacionSelected(preparacion: number):void{
    this.preparacionSelected = preparacion;
  }

  setInstrumentoSelected(instrumento: number):void{
    this.instrumentoSelected = instrumento;
  }

  resetFiltros():void{
    this.calificacionSelected =0;
    this.dificultadSelected=0;
    this.instrumentoSelected=0;
    this.hambreSelected=0;
    this.preparacionSelected=0;
    this.saborSelected=0;
  }

  goBack(): void {
    this.location.back();
  }

}
