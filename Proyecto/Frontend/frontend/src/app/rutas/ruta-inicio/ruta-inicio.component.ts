import { Component, OnInit } from '@angular/core';
import {CuponService} from "../../servicios/http/cupon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.css']
})
export class RutaInicioComponent implements OnInit {

  arregloCupones = [];

  constructor(
    private readonly _cuponService:CuponService,
    private readonly _router: Router
  ) { }

  irAEditarCupon(id:number){
    const ruta = ['/editarCupon', id]
    // /editarCupon/1
    this._router.navigate(ruta) ;
  }

  irAVerCupon(id:number){
    const ruta = ['/detalleCupon', id]
    // /editarCupon/1
    this._router.navigate(ruta) ;
  }

  eliminarCupon(id: number) {
    const obsEliminar = this._cuponService.eliminarCupon(id);
    obsEliminar.subscribe(
        () => {
          // Borrando de la interfaz
          const indice = this.arregloCupones
            .findIndex(u => u.id === id);
          this.arregloCupones.splice(indice, 1);
        },
        (error) => {
          console.error('Error', error);
        }
      );
  }



  ngOnInit(): void {
    const observableTraerTodos=this._cuponService.traerTodos();
    observableTraerTodos.subscribe(
      (cupones: any[])=>{
        this.arregloCupones = cupones;
      },
      (error) => {
        console.error('Error', error);
      }
    )
  }

}
