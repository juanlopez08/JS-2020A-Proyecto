import { Component, OnInit } from '@angular/core';
import {CuponService} from "../../servicios/http/cupon.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-ruta-detalle-cupon',
  templateUrl: './ruta-detalle-cupon.component.html',
  styleUrls: ['./ruta-detalle-cupon.component.css']
})
export class RutaDetalleCuponComponent implements OnInit {

  cupon;
  constructor(
    private readonly _cuponService:CuponService,
    private readonly _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => { //try
        const id = Number(parametros.id);
        const obsCupon = this._cuponService.obtenerUnCuponPorId(id);
        obsCupon.subscribe(
          (cupon:any)=>{
            this.cupon = cupon
          },
          (error)=>{
            console.error('Error', error)
          }
        )
      }
    )
  }

}
