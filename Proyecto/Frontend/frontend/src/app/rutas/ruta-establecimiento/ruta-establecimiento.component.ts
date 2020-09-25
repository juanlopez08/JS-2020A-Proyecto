import { Component, OnInit } from '@angular/core';
import {EstablecimientoService} from "../../servicios/http/establecimiento.service";
import {Router} from "@angular/router";
import {EsAdminGuard} from "../../servicios/guards/es-admin.guard";

@Component({
  selector: 'app-ruta-establecimiento',
  templateUrl: './ruta-establecimiento.component.html',
  styleUrls: ['./ruta-establecimiento.component.css']
})
export class RutaEstablecimientoComponent implements OnInit {

  arregloEstablecimiento = [];
  busquedaModeloEstablecimiento = ''

  constructor(
    private readonly _establecimientoService:EstablecimientoService,
    public readonly _esAdminGuard:EsAdminGuard,
    private readonly _router:Router
  ) { }

  filtrarEstablecimientos(){
    const consultaEstablecimientos = {
      or:[
        {nombre_establecimiento:{contains:this.busquedaModeloEstablecimiento}},
        {categoria_establecimiento:{contains:this.busquedaModeloEstablecimiento}},
        {telefono_establecimiento:{contains:this.busquedaModeloEstablecimiento}},
        {direccion_establecimiento:{contains:this.busquedaModeloEstablecimiento}},
      ]
    }

    const consultaEstablecimientosString = 'where=' + JSON.stringify(consultaEstablecimientos)

    const observableTraerTodosEstablecimientos=this._establecimientoService
      .traerTodosEstablecimientos(this.busquedaModeloEstablecimiento != '' ? consultaEstablecimientosString : '');
    observableTraerTodosEstablecimientos.subscribe(
      (establecimientos:any[])=>{
        this.arregloEstablecimiento = establecimientos;
      },
      (error)=>{
        console.error('Error', error);
      }
    )
  }

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
    this.filtrarEstablecimientos()
  }

}
