import { Component, OnInit } from '@angular/core';
import {EstablecimientoService} from "../../servicios/http/establecimiento.service";
import {ActivatedRoute, Params, Route, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-establecimiento',
  templateUrl: './ruta-editar-establecimiento.component.html',
  styleUrls: ['./ruta-editar-establecimiento.component.css']
})
export class RutaEditarEstablecimientoComponent implements OnInit {

  establecimiento;
  mostrarFormulario = false;

  constructor(
    private readonly _establecimientoService:EstablecimientoService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router:Router,
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => { //try
        const id = Number(parametros.id);
        const obsCupon = this._establecimientoService.obtenerUnEstablecimientoPorId(id);
        obsCupon.subscribe(
          (establecimiento:any)=>{
            this.establecimiento = establecimiento
            this.llenarFormularioEstablecimiento()
          },
          (error)=>{
            console.error('Error', error)
          }
        )
      }
    )
  }

  llenarFormularioEstablecimiento(){
    this.mostrarFormulario = true;
  }

  editarEstablecimiento(establecimiento){
    const obsEditarEstablecimiento =this._establecimientoService.editarEstablecimiento(establecimiento, this.establecimiento.id)
    obsEditarEstablecimiento.subscribe(
      (datos:Object)=>{
        const url = ['/establecimiento'];
        this._router.navigate(url);
      },
      (error)=>{console.error('Error',error)}
    )
  }

}
