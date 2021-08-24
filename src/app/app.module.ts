import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GeneralComponent } from './general/general.component';
import { DetalleComponent } from './detalle/detalle.component';
import { TipoPipe } from './tipo.pipe';
import { DificultadPipe } from './dificultad.pipe';
import { InstrumentoPipe } from './instrumento.pipe';
import { NuevalineaPipe } from './nuevalinea.pipe';
import { HomeComponent } from './home/home.component';
import { ArmarMenuComponent } from './armar-menu/armar-menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GeneralComponent,
    DetalleComponent,
    TipoPipe,
    DificultadPipe,
    InstrumentoPipe,
    NuevalineaPipe,
    HomeComponent,
    ArmarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
