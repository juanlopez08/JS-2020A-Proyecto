import { Component, OnInit } from '@angular/core';
import {EstablecimientoService} from "../../servicios/http/establecimiento.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-establecimiento',
  templateUrl: './ruta-establecimiento.component.html',
  styleUrls: ['./ruta-establecimiento.component.css']
})
export class RutaEstablecimientoComponent implements OnInit {

  arregloEstablecimiento = [];

  constructor(
    private readonly _establecimientoService:EstablecimientoService,
    private readonly _router:Router
  ) { }

  irAEditarEstablecimiento(id:number){
    const ruta = ['/editarEstablecimiento', id]
    // /editarEstablecimiento/1
    this._router.navigate(ruta);
  }

  eliminarEstablecimiento(id:number){
    const obsEliminarEstablecimiento = this._establecimientoService.eliminarEstablecimiento(id);
    obsEliminarEstablecimiento.subscribe(
      ()=>{
        //Borrando de la interfaz
        const indice = this.arregloEstablecimiento
          .findIndex(e => e.id === id);
        this.arregloEstablecimiento.splice(indice, 1);
      },
      (error)=>{
        console.error('Error', error);
      }
    );
  }


  ngOnInit(): void {
    const observableTraerTodosEstablecimientos=this._establecimientoService.traerTodosEstablecimientos();
    observableTraerTodosEstablecimientos.subscribe(
      (establecimientos:any[])=>{
        this.arregloEstablecimiento = establecimientos;
      },
      (error)=>{
        console.error('Error', error);
      }
    )
  }

}
