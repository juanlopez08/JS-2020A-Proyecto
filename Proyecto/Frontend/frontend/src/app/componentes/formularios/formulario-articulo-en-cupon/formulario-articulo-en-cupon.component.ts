import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticuloEnCuponService} from "../../../servicios/http/articulo-en-cupon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulario-articulo-en-cupon',
  templateUrl: './formulario-articulo-en-cupon.component.html',
  styleUrls: ['./formulario-articulo-en-cupon.component.css']
})
export class FormularioArticuloEnCuponComponent implements OnInit {

  @Input()
  idCuponInput:number;

  @Input()
  idArticuloInput:number;

  @Input()
  tipoDescuentoInput:string;

  @Input()
  cantidadDescuentoInput:number;

  @Output()
  informacionArticuloEnCuponValidada: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private readonly _articuloEnCuponService:ArticuloEnCuponService,
    private readonly _router:Router,
  ) { }

  idCupon: number;
  idArticulo: number;
  tipoDescuento:string;
  cantidadDescuento:number;

  ngOnInit(): void {
    if(this.idCuponInput && this.idArticuloInput && this.tipoDescuentoInput && this.cantidadDescuentoInput){
      this.idArticuloInput = this.idArticulo;
      this.idCuponInput = this.idCupon
      this.tipoDescuentoInput = this.tipoDescuento
      this.cantidadDescuentoInput = this.cantidadDescuento
    }
  }

  crearArticuloEnCupon(formulario){
    console.log(formulario);
    this.informacionArticuloEnCuponValidada.emit({
      cantidad_descuento: this.cantidadDescuento,
      tipo_descuento:this.tipoDescuento,
      articulo:this.idArticulo,
      cupon:this.idCupon
    })
  }

  ayudaCrearArticuloEnCupon(){
    alert('Todos los campos son necesarios para esta operacion')
  }


}
