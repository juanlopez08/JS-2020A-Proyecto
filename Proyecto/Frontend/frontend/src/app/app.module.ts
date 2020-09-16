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
    RutaDetalleEstablecimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CuponService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
