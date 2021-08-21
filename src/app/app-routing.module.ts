import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { GeneralComponent } from './general/general.component';

const routes: Routes = [
  { path: '', redirectTo: '/general', pathMatch: 'full' },
  {path: 'general/:tipo', component: GeneralComponent, runGuardsAndResolvers: 'paramsChange'},
  {path: 'detalle/:id', component: DetalleComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
