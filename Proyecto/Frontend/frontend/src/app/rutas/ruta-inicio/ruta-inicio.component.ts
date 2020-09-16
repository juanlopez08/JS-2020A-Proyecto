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
    //inicio/editarCupon/1
    this._router.navigate(ruta) ;
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
