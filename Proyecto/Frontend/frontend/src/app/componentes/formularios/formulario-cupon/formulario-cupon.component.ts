import { Component, OnInit } from '@angular/core';
import {CuponService} from "../../../servicios/http/cupon.service";

@Component({
  selector: 'app-formulario-cupon',
  templateUrl: './formulario-cupon.component.html',
  styleUrls: ['./formulario-cupon.component.css']
})
export class FormularioCuponComponent implements OnInit {

  constructor(
    private readonly _cuponService:CuponService,
  ) { }

  pathImagenCupon:string;
  pathCodigoQr:string;
  informacionCupon:string;
  estadoCupon:string;
  cantidadUsos:number;
  establecimiento:number;

  ngOnInit(): void {
  }

  crearCupon(formulario){
    console.log(formulario);
    const cuponNuevo = {
      path_imagen_cupon:this.pathImagenCupon,
      path_codigo_qr_cupon:this.pathCodigoQr,
      informacion_cupon:this.informacionCupon,
      estado_cupon:this.estadoCupon,
      cantidad_usos: this.cantidadUsos,
      establecimiento:this.establecimiento
    };
    const obsCrearCupon = this._cuponService.crearCupon(cuponNuevo);
    obsCrearCupon
      .subscribe(
        (datos:Object) => {
          console.log('Nuevo Cupon', datos)
        },
        (error) => {
          console.error('Error', error);
        }
      )

  }


  ayudaCrearCupon(){
    alert('Todos los campos son necesarios para esta operacion')
  }



}
