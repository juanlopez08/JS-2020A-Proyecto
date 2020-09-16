import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaCuponComponent } from './componentes/carta-cupon/carta-cupon.component';
import {CuponService} from "./servicios/http/cupon.service";
import {HttpClientModule} from "@angular/common/http";
import { RutaDetalleCuponComponent } from './rutas/ruta-detalle-cupon/ruta-detalle-cupon.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaCuponComponent,
    RutaDetalleCuponComponent,
    RutaInicioComponent
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
