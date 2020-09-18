import { Component, OnInit } from '@angular/core';
import {EstablecimientoService} from "../../../servicios/http/establecimiento.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-formulario-establecimiento',
  templateUrl: './formulario-establecimiento.component.html',
  styleUrls: ['./formulario-establecimiento.component.css']
})
export class FormularioEstablecimientoComponent implements OnInit {

  constructor(
    private readonly _establecimientoService:EstablecimientoService,
    private readonly _router:Router
  ) { }

  nombreEstablecimiento:string;
  categoriaEstablecimiento:string;
  telefonoEstablecimiento:string;
  direccionEstablecimiento:string;

  ngOnInit(): void {
  }

crearEstablecimiento(formulario){
    console.log(formulario);
    const telefono = this.telefonoEstablecimiento;
    const esNumero = !Number.isNaN(Number(telefono));
    if(esNumero){
    const establecimientoNuevo={
        nombre_establecimiento: this.nombreEstablecimiento,
        categoria_establecimiento: this.categoriaEstablecimiento,
        telefono_establecimiento: this.telefonoEstablecimiento,
        direccion_establecimiento: this.direccionEstablecimiento
      };
      const obsCrearEstablecimiento = this._establecimientoService.crearEstablecimiento(establecimientoNuevo);
      obsCrearEstablecimiento
        .subscribe(
          (datos:Object)=>{
            alert('Nuevo establecimiento creado');
            console.log('Nuevo Establecimiento', datos);
          },
          (error)=>{
            console.error('Error', error);
          }
          )
    }else{
      console.error('NO ES UN NUMERO')
      alert('El telefono debe tener solo numeros')
    }
  }

  ayudaCrearEstablecimiento(){
    alert('Todos los campos son necesarios para esta operacion')
  }


}

