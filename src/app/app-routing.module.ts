import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'general/:tipo', component: GeneralComponent, runGuardsAndResolvers: 'paramsChange'},
  {path: 'detalle/:id', component: DetalleComponent, runGuardsAndResolvers: 'paramsChange'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
