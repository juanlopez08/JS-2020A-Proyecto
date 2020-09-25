import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaCuponComponent } from './componentes/carta-cupon/carta-cupon.component';
import {CuponService} from "./servicios/http/cupon.service";
import {HttpClientModule} from "@angular/common/http";
import { RutaDetalleCuponComponent } from './rutas/ruta-detalle-cupon/ruta-detalle-cupon.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaRegistroComponent } from './rutas/ruta-registro/ruta-registro.component';
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { RutaEstablecimientoComponent } from './rutas/ruta-establecimiento/ruta-establecimiento.component';
import { RutaCuponesGuardadosComponent } from './rutas/ruta-cupones-guardados/ruta-cupones-guardados.component';
import { RutaDetalleEstablecimientoComponent } from './rutas/ruta-detalle-establecimiento/ruta-detalle-establecimiento.component';
import { RutaListaCuponComponent } from './rutas/ruta-lista-cupon/ruta-lista-cupon.component';
import { RutaCrearCuponComponent } from './rutas/ruta-crear-cupon/ruta-crear-cupon.component';
import { RutaEditarCuponComponent } from './rutas/ruta-editar-cupon/ruta-editar-cupon.component';
import { FormularioCuponComponent } from './componentes/formularios/formulario-cupon/formulario-cupon.component';
import {FormsModule} from "@angular/forms";
import {EstablecimientoService} from "./servicios/http/establecimiento.service";
import { RutaEditarEstablecimientoComponent } from './rutas/ruta-editar-establecimiento/ruta-editar-establecimiento.component';
import { RutaCrearEstablecimientoComponent } from './rutas/ruta-crear-establecimiento/ruta-crear-establecimiento.component';
import { FormularioEstablecimientoComponent } from './componentes/formularios/formulario-establecimiento/formulario-establecimiento.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import {UsuarioService} from "./servicios/http/usuario.service";
import { RutaCrearUsuarioComponent } from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { FormularioUsuarioComponent } from './componentes/formularios/formulario-usuario/formulario-usuario.component';
import { RutaEditarUsuarioComponent } from './rutas/ruta-editar-usuario/ruta-editar-usuario.component';
import { RutaArticuloComponent } from './rutas/ruta-articulo/ruta-articulo.component';
import { RutaCrearArticuloComponent } from './rutas/ruta-crear-articulo/ruta-crear-articulo.component';
import { RutaEditarArticuloComponent } from './rutas/ruta-editar-articulo/ruta-editar-articulo.component';
import {ArticuloService} from "./servicios/http/articulo.service";
import { FormularioArticuloComponent } from './componentes/formularios/formulario-articulo/formulario-articulo.component';
import {AuthService} from "./servicios/auth/auth.service";
import {EstaLogeadoGuard} from "./servicios/guards/esta-logeado.guard";
import {EsAdminGuard} from "./servicios/guards/es-admin.guard";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RolesService} from "./servicios/http/roles.service";
import {ArticuloEnCuponService} from "./servicios/http/articulo-en-cupon.service";
import {UsuarioTieneRolService} from "./servicios/http/usuario-tiene-rol.service";

@NgModule({
  declarations: [
    AppComponent,
    CartaCuponComponent,
    RutaDetalleCuponComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaRegistroComponent,
    RutaPerfilComponent,
    RutaEstablecimientoComponent,
    RutaCuponesGuardadosComponent,
    RutaDetalleEstablecimientoComponent,
    RutaListaCuponComponent,
    RutaCrearCuponComponent,
    RutaEditarCuponComponent,
    FormularioCuponComponent,
    RutaEditarEstablecimientoComponent,
    RutaCrearEstablecimientoComponent,
    FormularioEstablecimientoComponent,
    RutaUsuarioComponent,
    RutaCrearUsuarioComponent,
    FormularioUsuarioComponent,
    RutaEditarUsuarioComponent,
    RutaArticuloComponent,
    RutaCrearArticuloComponent,
    RutaEditarArticuloComponent,
    FormularioArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [
    CuponService,
    EstablecimientoService,
    UsuarioService,
    ArticuloService,
    AuthService,
    EstaLogeadoGuard,
    EsAdminGuard,
    RolesService,
    ArticuloEnCuponService,
    RutaLoginComponent,
    UsuarioTieneRolService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
