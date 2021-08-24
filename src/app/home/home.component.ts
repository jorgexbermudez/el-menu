import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topItems: Item[] = [];

  //Seleccion de menú
  public diasSelected: number = 1;
  public desayunoSelected: any = false;
  public comidaSelected: any = false;
  public ensaladaSelected: any = false;
  public sopaSelected: any = false;
  public guarnicionSelected: any = false;
  public cenaSelected: any = false;


  constructor(private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.getTopItems();
  }

  getTopItems(): void {
    this.itemService.getTopItems()
      .subscribe(items => this.topItems = items)
  }

  checkBoxValue: any = false;
  checkCheckBoxvalue() {
    console.log(this.desayunoSelected)
  }

}
