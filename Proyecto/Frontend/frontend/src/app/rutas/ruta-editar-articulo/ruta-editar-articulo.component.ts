import { Component, OnInit } from '@angular/core';
import {ArticuloService} from "../../servicios/http/articulo.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-articulo',
  templateUrl: './ruta-editar-articulo.component.html',
  styleUrls: ['./ruta-editar-articulo.component.css']
})
export class RutaEditarArticuloComponent implements OnInit {

  mostrarFormularioArticulo = false;
  articulo;

  constructor(
    private readonly _articuloService:ArticuloService,
    private readonly _activtedRoute:ActivatedRoute,
    private readonly _router:Router,
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activtedRoute.params;
    obsRuta.subscribe(
      (parametros:Params)=>{
        const id = Number(parametros.id);
        const obsArticulo = this._articuloService.obtenerUnArticuloPorId(id);
        obsArticulo.subscribe(
          (articulo)=>{
            this.articulo = articulo;
            this.llenarFormularioArticulo()
          },
          (error)=>{
            console.error('Error', error);
          }
        )
      }
    )
  }

  llenarFormularioArticulo(){
    this.mostrarFormularioArticulo = true;
  }

  editarArticulo(articulo){
    const obsEditarArticulo = this._articuloService.editarArticulo(articulo, this.articulo.id);
    obsEditarArticulo.subscribe(
      (datos:Object)=>{
        const url = ['/articulo']
        this._router.navigate(url)
      },
      (error)=>{console.error('Error',error)}
    )
  }

}
