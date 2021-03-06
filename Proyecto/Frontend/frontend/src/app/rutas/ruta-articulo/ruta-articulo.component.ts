import { Component, OnInit } from '@angular/core';
import {ArticuloService} from "../../servicios/http/articulo.service";
import {Router} from "@angular/router";
import {EsAdminGuard} from "../../servicios/guards/es-admin.guard";
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-ruta-articulo',
  templateUrl: './ruta-articulo.component.html',
  styleUrls: ['./ruta-articulo.component.css']
})
export class RutaArticuloComponent implements OnInit {

  arregloArticulo=[];
  busquedaModeloArticulo = '';

  constructor(
    private readonly _articuloService:ArticuloService,
    private readonly _router:Router,
    private readonly _esAdminGuard:EsAdminGuard,
    public readonly _authService:AuthService,

  ) { }

  filtrarArreglo(){
    const consulta = {
      nombre_articulo:{contains:this.busquedaModeloArticulo}
    };

    const consultaString = 'where=' + JSON.stringify(consulta)

    const observableTraerTodos = this._articuloService
      .traerTodosArticulos(this.busquedaModeloArticulo != '' ? consultaString : '');
    observableTraerTodos
      .subscribe(
        (articulos: any[]) => {
          this.arregloArticulo = articulos;
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }

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

  irAVerCupon(id:number){
    const ruta = ['/detalleCupon', id]
    // /editarCupon/1
    this._router.navigate(ruta) ;
  }

  ngOnInit(): void {
    this.filtrarArreglo()
  }

}











