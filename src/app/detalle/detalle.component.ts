import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit, OnDestroy {
    recetaOraciones: string[]=[];
    itemsRelacionados: Item[]=[];
    navigationSubscription;

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location, 
    private router: Router,
    ) { 
    // subscribe to the router events - storing the subscription so
    // we can unsubscribe later. 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.getItem();
      }
    });

    }

  @Input() item?: Item; 
  public calificacion = 0;

  ngOnInit(): void {
    
  }

  getItem():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
      this.itemService.getItem(id)
      .subscribe(item => this.item = item);
      this.calificacion = this.item?.calificacion!;
      if(this.item?.receta){
        this.recetaAOraciones(this.item.receta);
      }
      if(this.item?.relacionados){
        this.getItemsRelacionados(this.item.relacionados);
      }
  }

  recetaAOraciones(parrafo: string):void{
    let oraciones = parrafo.split(".")
    this.recetaOraciones= oraciones.splice(0,oraciones.length-1);
  }

  getItemsRelacionados(ids: number[]):void{
    this.itemService.getItemsVarios(ids).subscribe(item => this.itemsRelacionados = item)
  }


  goBack(): void {
    this.location.back();
  }

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we  
    // don't then we will continue to run our initialiseInvites()   
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
