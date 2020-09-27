import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ArticuloEnCuponService} from "../../servicios/http/articulo-en-cupon.service";

@Component({
  selector: 'app-ruta-articulo-en-cupon',
  templateUrl: './ruta-articulo-en-cupon.component.html',
  styleUrls: ['./ruta-articulo-en-cupon.component.css']
})
export class RutaArticuloEnCuponComponent implements OnInit {

  constructor(
    private readonly _articuloEnCuponService:ArticuloEnCuponService,
    private readonly _router:Router,
  ) { }

  ngOnInit(): void {
  }

  crearArticuloEnCupon(articulo){
    const obsCrearArticuloEnCupon = this._articuloEnCuponService.crearArticuloEnCupon(articulo);
    obsCrearArticuloEnCupon
      .subscribe(
        (datos:Object) => {
//          alert('Nuevo articulo en cupon creado');
          console.log('Nuevo articulo en cupon', datos);
          const url = ['/articulo']
          this._router.navigate(url);
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }

}
