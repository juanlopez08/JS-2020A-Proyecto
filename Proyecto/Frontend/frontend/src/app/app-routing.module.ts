import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaDetalleCuponComponent} from "./rutas/ruta-detalle-cupon/ruta-detalle-cupon.component";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaCuponesGuardadosComponent} from "./rutas/ruta-cupones-guardados/ruta-cupones-guardados.component";
import {RutaEstablecimientoComponent} from "./rutas/ruta-establecimiento/ruta-establecimiento.component";
import {RutaDetalleEstablecimientoComponent} from "./rutas/ruta-detalle-establecimiento/ruta-detalle-establecimiento.component";
import {RutaCategoriaComponent} from "./rutas/ruta-categoria/ruta-categoria.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaPerfilComponent} from "./rutas/ruta-perfil/ruta-perfil.component";
import {RutaRegistroComponent} from "./rutas/ruta-registro/ruta-registro.component";
import {RutaListaCuponComponent} from "./rutas/ruta-lista-cupon/ruta-lista-cupon.component";
import {RutaCrearCuponComponent} from "./rutas/ruta-crear-cupon/ruta-crear-cupon.component";
import {RutaEditarCuponComponent} from "./rutas/ruta-editar-cupon/ruta-editar-cupon.component";

const routes: Routes = [
  {
    component:RutaInicioComponent,
    path:'inicio',
  },
  {
    path:'detalleCupon',
    component:RutaDetalleCuponComponent,
  },
  {
    path:'listaCupon',
    component:RutaListaCuponComponent
  },
  {
    path:'crearCupon',
    component:RutaCrearCuponComponent
  },
  {
    path:'',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path:'editarCupon/:id',
    component:RutaEditarCuponComponent
  },
  {
    component:RutaCuponesGuardadosComponent,
    path:'cuponesGuardados'
  },
  {
    component:RutaCategoriaComponent,
    path:'categoria'
  },
  {
    component:RutaEstablecimientoComponent,
    path:'establecimiento',
    children:[
      {
        component:RutaDetalleEstablecimientoComponent,
        path:'detalleEstablecimiento'
      },
    ]
  },
  {
    component:RutaLoginComponent,
    path:'login'
  },
  {
    component:RutaRegistroComponent,
    path:'registro'
  },
  {
    component:RutaPerfilComponent,
    path:'perfil'
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
