import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CuponService} from "../../../servicios/http/cupon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulario-cupon',
  templateUrl: './formulario-cupon.component.html',
  styleUrls: ['./formulario-cupon.component.css']
})
export class FormularioCuponComponent implements OnInit {

  @Input()
  pathImagenCuponInput:string;

  @Input()
  pathCodigoQrInput:string;

  @Input()
  informacionCuponInput:string;

  @Input()
  estadoCuponInput:string;

  @Input()
  cantidadUsosInput:number;

  @Input()
  establecimientoInput:number;

  @Output()
  informacionCuponValidada : EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private readonly _cuponService:CuponService,
    private readonly _router: Router
  ) { }

  pathImagenCupon:string;
  pathCodigoQr:string;
  informacionCupon:string;
  estadoCupon:string;
  cantidadUsos:number;
  establecimiento:number;

  ngOnInit(): void {
    if(this.pathImagenCuponInput &&
      this.pathCodigoQrInput &&
      this.informacionCuponInput &&
      this.estadoCuponInput &&
      this.cantidadUsosInput &&
      this.establecimientoInput
    ){
      this.pathImagenCupon=this.pathImagenCuponInput;
      this.pathCodigoQr=this.pathCodigoQrInput;
      this.informacionCupon=this.informacionCuponInput;
      this.estadoCupon=this.estadoCuponInput;
      this.cantidadUsos=this.cantidadUsosInput;
      this.establecimiento=this.establecimientoInput;
    }
  }

  crearCupon(formulario){
    console.log(formulario);
    this.informacionCuponValidada.emit({
      path_imagen_cupon:this.pathImagenCupon,
      path_codigo_qr_cupon:this.pathCodigoQr,
      informacion_cupon:this.informacionCupon,
      estado_cupon:this.estadoCupon,
      cantidad_usos: this.cantidadUsos,
      establecimiento:this.establecimiento
    })
  }


  ayudaCrearCupon(){
    alert('Todos los campos son necesarios para esta operacion')
  }



}
