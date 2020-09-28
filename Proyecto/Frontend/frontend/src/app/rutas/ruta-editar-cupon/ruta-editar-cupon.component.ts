import { Component, OnInit } from '@angular/core';
import {CuponService} from "../../servicios/http/cupon.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-cupon',
  templateUrl: './ruta-editar-cupon.component.html',
  styleUrls: ['./ruta-editar-cupon.component.css']
})
export class RutaEditarCuponComponent implements OnInit {

  cupon;
  mostrarFormulario=false;

  constructor(
    private readonly _cuponService:CuponService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router:Router
    ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => { //try
        const id = Number(parametros.id);
        const obsCupon = this._cuponService.obtenerUnCuponPorId(id);
        this.llenarFormularioCupon();
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

  llenarFormularioCupon(){
    this.mostrarFormulario=true
  }

  editarCupon(cupon){
    const obsEditarCupon = this._cuponService.editarCupon(cupon, this.cupon.id)
    obsEditarCupon.subscribe(
      (datos:Object)=>{
        const url=['/inicio']
        this._router.navigate(url);
      },
      (error)=>{console.error('Error', error)}
    )
  }

}
