import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {ArticuloService} from "../../../servicios/http/articulo.service";

@Component({
  selector: 'app-formulario-articulo',
  templateUrl: './formulario-articulo.component.html',
  styleUrls: ['./formulario-articulo.component.css']
})
export class FormularioArticuloComponent implements OnInit {

  @Input()
  nombreArticuloInput:string;

  @Input()
  precioArticuloInput:number;

  @Output()
  informacionArticuloValidada: EventEmitter<any> = new EventEmitter<any>()


  constructor(
    private readonly _articuloService:ArticuloService,
    private readonly _router:Router,
  ) { }

  nombreArticulo: string;
  precioArticulo: number;

  ngOnInit(): void {
    if(this.nombreArticuloInput && this.precioArticuloInput){
      this.nombreArticulo = this.nombreArticuloInput;
      this.precioArticulo = this.precioArticuloInput
    }
  }


  crearArticulo(formulario){
    console.log(formulario);
    this.informacionArticuloValidada.emit({
      nombre_articulo: this.nombreArticulo,
      precio_articulo: this.precioArticulo
    })
  }

  // crearArticulo(formulario){
  //   console.log(formulario);
  //   const articuloNuevo = {
  //     nombre_articulo: this.nombreArticulo,
  //     precio_articulo: this.precioArticulo,
  //   };
  //   const obsCrearArticulo = this._articuloService.crearArticulo(articuloNuevo);
  //   obsCrearArticulo
  //     .subscribe(
  //       (datos:Object) => {
  //         alert('Nuevo articulo creado');
  //         console.log('Nuevo articulo', datos);
  //       },
  //       (error) => {
  //         console.error('Error', error);
  //       }
  //     )
  // }

  ayudaCrearArticulo(){
    alert('Todos los campos son necesarios para esta operacion')
  }

}
