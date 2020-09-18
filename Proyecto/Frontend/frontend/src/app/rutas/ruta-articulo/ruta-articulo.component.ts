import { Component, OnInit } from '@angular/core';
import {ArticuloService} from "../../servicios/http/articulo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-articulo',
  templateUrl: './ruta-articulo.component.html',
  styleUrls: ['./ruta-articulo.component.css']
})
export class RutaArticuloComponent implements OnInit {

  arregloArticulo=[];

  constructor(
    private readonly _articuloService:ArticuloService,
    private readonly _router:Router,
  ) { }

  irAEditarArticulo(id:number){
    const ruta = ['editarArticulo', id];
    this._router.navigate(ruta);
  }

  eliminarArticulo(id:number){
    const obsEliminarArticulo = this._articuloService.eliminarArticulo(id);
    obsEliminarArticulo.subscribe(
      ()=>{
        const indice = this.arregloArticulo
          .findIndex(a => a.id === id);
        this.arregloArticulo.splice(indice,1);
      },
      (error)=>{
        console.error('Error', error);
      }
    );
  }

  ngOnInit(): void {
    const observableTraerTodosArticulos = this._articuloService.traerTodosArticulos();
    observableTraerTodosArticulos.subscribe(
      (articulos : any[])=>{
        this.arregloArticulo = articulos
      },
      (error)=>{
        console.error('Error', error);
      }
    );
  }

}











