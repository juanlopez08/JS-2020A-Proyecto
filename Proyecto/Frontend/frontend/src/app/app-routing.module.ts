import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaDetalleCuponComponent} from "./rutas/ruta-detalle-cupon/ruta-detalle-cupon.component";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaCuponesGuardadosComponent} from "./rutas/ruta-cupones-guardados/ruta-cupones-guardados.component";
import {RutaEstablecimientoComponent} from "./rutas/ruta-establecimiento/ruta-establecimiento.component";
import {RutaDetalleEstablecimientoComponent} from "./rutas/ruta-detalle-establecimiento/ruta-detalle-establecimiento.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaPerfilComponent} from "./rutas/ruta-perfil/ruta-perfil.component";
import {RutaRegistroComponent} from "./rutas/ruta-registro/ruta-registro.component";
import {RutaListaCuponComponent} from "./rutas/ruta-lista-cupon/ruta-lista-cupon.component";
import {RutaCrearCuponComponent} from "./rutas/ruta-crear-cupon/ruta-crear-cupon.component";
import {RutaEditarCuponComponent} from "./rutas/ruta-editar-cupon/ruta-editar-cupon.component";
import {RutaCrearEstablecimientoComponent} from "./rutas/ruta-crear-establecimiento/ruta-crear-establecimiento.component";
import {RutaEditarEstablecimientoComponent} from "./rutas/ruta-editar-establecimiento/ruta-editar-establecimiento.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaCrearUsuarioComponent} from "./rutas/ruta-crear-usuario/ruta-crear-usuario.component";
import {RutaEditarUsuarioComponent} from "./rutas/ruta-editar-usuario/ruta-editar-usuario.component";
import {RutaArticuloComponent} from "./rutas/ruta-articulo/ruta-articulo.component";
import {RutaCrearArticuloComponent} from "./rutas/ruta-crear-articulo/ruta-crear-articulo.component";
import {RutaEditarArticuloComponent} from "./rutas/ruta-editar-articulo/ruta-editar-articulo.component";
import {EstaLogeadoGuard} from "./servicios/guards/esta-logeado.guard";
import {EsAdminGuard} from "./servicios/guards/es-admin.guard";

const routes: Routes = [
  // CUPONES
  {
    component:RutaInicioComponent,
    path:'inicio',
    canActivate : [
       EstaLogeadoGuard
    ]
  },
  {
    path:'listaCupon',
    component:RutaListaCuponComponent,
    canActivate : [
       EstaLogeadoGuard
    ]
  },
  {
    path:'detalleCupon/:id',
    component:RutaDetalleCuponComponent,
    canActivate : [
       EstaLogeadoGuard
    ]
  },
  {
    path:'crearCupon',
    component:RutaCrearCuponComponent,
    canActivate : [
       EstaLogeadoGuard,
      EsAdminGuard
    ]
  },
  {
    path:'editarCupon/:id',
    component:RutaEditarCuponComponent,
    canActivate : [
      EstaLogeadoGuard,
      EsAdminGuard
    ]
  },
  {
    component:RutaCuponesGuardadosComponent,
    path:'cuponesGuardados',
    canActivate : [
       EstaLogeadoGuard
    ]
  },

  // ESTABLECIMIENTOS
  {
    component: RutaEstablecimientoComponent,
    path: 'establecimiento',
    canActivate : [
       EstaLogeadoGuard
    ]
  },
  {
    component:RutaDetalleEstablecimientoComponent,
    path:'detalleEstablecimiento',
    canActivate : [
       EstaLogeadoGuard
    ]
  },
  {
    component: RutaCrearEstablecimientoComponent,
    path:'crearEstablecimiento',
    canActivate : [
       EstaLogeadoGuard,
      EsAdminGuard
    ]
  },
  {
    component:RutaEditarEstablecimientoComponent,
    path:'editarEstablecimiento/:id',
    canActivate : [
       EstaLogeadoGuard,
      EsAdminGuard
    ]
  },
  // ARTICULOS
  {
    component:RutaArticuloComponent,
    path:'articulo',
    canActivate : [
       EstaLogeadoGuard
    ]
  },
  {
    component:RutaCrearArticuloComponent,
    path:'crearArticulo',
    canActivate : [
       EstaLogeadoGuard,
      EsAdminGuard
    ]
  },
  {
    component:RutaEditarArticuloComponent,
    path:'editarArticulo/:id',
    canActivate : [
       EstaLogeadoGuard,
      EsAdminGuard
    ]
  },
  // USUARIOS
  {
    component:RutaUsuarioComponent,
    path:'usuarios',
    canActivate : [
       EstaLogeadoGuard
    ]
  },
  {
    component:RutaCrearUsuarioComponent,
    path:'crearUsuario',
    canActivate : [
       EstaLogeadoGuard
    ]
  },
  {
    component:RutaEditarUsuarioComponent,
    path:'editarUsuario/:id',
    canActivate : [
       EstaLogeadoGuard
    ]
  },
  {
    component:RutaLoginComponent,
    path:'login',
  },
  {
    component:RutaRegistroComponent,
    path:'registro',
  },
  {
    component:RutaPerfilComponent,
    path:'perfil',
    canActivate : [
       EstaLogeadoGuard
    ]
  },

  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
