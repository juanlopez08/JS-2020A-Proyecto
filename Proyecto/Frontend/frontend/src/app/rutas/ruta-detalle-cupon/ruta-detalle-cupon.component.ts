import { Component, OnInit } from '@angular/core';
import {CuponService} from "../../servicios/http/cupon.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ArticuloService} from "../../servicios/http/articulo.service";
import {EsAdminGuard} from "../../servicios/guards/es-admin.guard";
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-ruta-detalle-cupon',
  templateUrl: './ruta-detalle-cupon.component.html',
  styleUrls: ['./ruta-detalle-cupon.component.css']
})
export class RutaDetalleCuponComponent implements OnInit {

  cupon;
  arregloArticulos=[];
  arregloArticulosDatos=[];

  constructor(
    private readonly _cuponService:CuponService,
    private readonly _activatedRoute: ActivatedRoute,
    public readonly _authService:AuthService,
    private readonly _articuloService:ArticuloService,
    private readonly _router:Router,
    private readonly _esAdminGuard:EsAdminGuard,
  ) { }

  irAEditarArticulo(id:number){
    const ruta = ['editarArticulo', id];
    this._router.navigate(ruta);
  }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => { //try
        const id = Number(parametros.id);
        const obsCupon = this._cuponService.obtenerUnCuponPorId(id);
        obsCupon.subscribe(
          (cupon:any)=>{
            this.cupon = cupon
            this.arregloArticulos = cupon['articulosEnCupones']

          },
          (error)=>{
            console.error('Error', error)
          }
        )
      }
    )
  }



}
