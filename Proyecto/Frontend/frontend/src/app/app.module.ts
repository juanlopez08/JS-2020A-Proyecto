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
import { RutaCategoriaComponent } from './rutas/ruta-categoria/ruta-categoria.component';
import { RutaEstablecimientoComponent } from './rutas/ruta-establecimiento/ruta-establecimiento.component';
import { RutaCuponesGuardadosComponent } from './rutas/ruta-cupones-guardados/ruta-cupones-guardados.component';
import { RutaDetalleEstablecimientoComponent } from './rutas/ruta-detalle-establecimiento/ruta-detalle-establecimiento.component';
import { RutaListaCuponComponent } from './rutas/ruta-lista-cupon/ruta-lista-cupon.component';
import { RutaCrearCuponComponent } from './rutas/ruta-crear-cupon/ruta-crear-cupon.component';
import { RutaEditarCuponComponent } from './rutas/ruta-editar-cupon/ruta-editar-cupon.component';
import { FormularioCuponComponent } from './componentes/formularios/formulario-cupon/formulario-cupon.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CartaCuponComponent,
    RutaDetalleCuponComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaRegistroComponent,
    RutaPerfilComponent,
    RutaCategoriaComponent,
    RutaEstablecimientoComponent,
    RutaCuponesGuardadosComponent,
    RutaDetalleEstablecimientoComponent,
    RutaListaCuponComponent,
    RutaCrearCuponComponent,
    RutaEditarCuponComponent,
    FormularioCuponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    CuponService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
