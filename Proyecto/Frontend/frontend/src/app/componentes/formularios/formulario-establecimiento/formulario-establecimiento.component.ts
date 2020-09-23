import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EstablecimientoService} from "../../../servicios/http/establecimiento.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-formulario-establecimiento',
  templateUrl: './formulario-establecimiento.component.html',
  styleUrls: ['./formulario-establecimiento.component.css']
})
export class FormularioEstablecimientoComponent implements OnInit {

  @Input()
  nombreEstablecimientoInput:string;

  @Input()
  categoriaEstablecimientoInput:string;

  @Input()
  telefonoEstablecimientoInput:string;

  @Input()
  direccionEstablecimientoInput:string;

  @Output()
  informacionEstablecimientoValidad: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private readonly _establecimientoService:EstablecimientoService,
    private readonly _router:Router
  ) { }

  nombreEstablecimiento:string;
  categoriaEstablecimiento:string;
  telefonoEstablecimiento:string;
  direccionEstablecimiento:string;

  ngOnInit(): void {
    if(this.nombreEstablecimientoInput &&
      this.categoriaEstablecimientoInput &&
      this.telefonoEstablecimientoInput &&
      this.direccionEstablecimientoInput
    ){
      this.nombreEstablecimiento=this.nombreEstablecimientoInput;
      this.categoriaEstablecimiento=this.categoriaEstablecimientoInput;
      this.telefonoEstablecimiento=this.telefonoEstablecimientoInput;
      this.direccionEstablecimiento=this.direccionEstablecimientoInput;
    }

  }

crearEstablecimiento(formulario){
    console.log(formulario);
    const telefono = this.telefonoEstablecimiento;
    const esNumero = !Number.isNaN(Number(telefono));
    if(esNumero){
    this.informacionEstablecimientoValidad.emit({
      nombre_establecimiento: this.nombreEstablecimiento,
      categoria_establecimiento: this.categoriaEstablecimiento,
      telefono_establecimiento: this.telefonoEstablecimiento,
      direccion_establecimiento: this.direccionEstablecimiento
    })
    }else{
      console.error('NO ES UN NUMERO')
      alert('El telefono debe tener solo numeros')
    }
  }

  ayudaCrearEstablecimiento(){
    alert('Todos los campos son necesarios para esta operacion')
  }


}

