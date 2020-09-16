import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaDetalleCuponComponent} from "./rutas/ruta-detalle-cupon/ruta-detalle-cupon.component";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";

const routes: Routes = [
  {
    component:RutaInicioComponent,
    path:'inicio'
  },
  {
    component:RutaDetalleCuponComponent,
    path:'detalleCupon'
  },
  {
    path:'',
    redirectTo:'/inicio',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
