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

const routes: Routes = [
  // CUPONES
  {
    component:RutaInicioComponent,
    path:'inicio',
  },
  {
    path:'listaCupon',
    component:RutaListaCuponComponent
  },
  {
    path:'detalleCupon/:id',
    component:RutaDetalleCuponComponent,
  },
  {
    path:'crearCupon',
    component:RutaCrearCuponComponent
  },
  {
    path:'editarCupon/:id',
    component:RutaEditarCuponComponent
  },
  {
    component:RutaCuponesGuardadosComponent,
    path:'cuponesGuardados'
  },

  // ESTABLECIMIENTOS
  {
    component: RutaEstablecimientoComponent,
    path: 'establecimiento',
  },
  {
    component:RutaDetalleEstablecimientoComponent,
    path:'detalleEstablecimiento'
  },
  {
    component: RutaCrearEstablecimientoComponent,
    path:'crearEstablecimiento'
  },
  {
    component:RutaEditarEstablecimientoComponent,
    path:'editarEstablecimiento/:id'
  },

  // USUARIOS
  {
    component:RutaUsuarioComponent,
    path:'usuarios'
  },
  {
    component:RutaCrearUsuarioComponent,
    path:'crearUsuario'
  },
  {
    component:RutaEditarUsuarioComponent,
    path:'editarUsuario/:id'
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
