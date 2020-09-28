import { Component, OnInit } from '@angular/core';
import {ArticuloService} from "../../servicios/http/articulo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-articulo',
  templateUrl: './ruta-crear-articulo.component.html',
  styleUrls: ['./ruta-crear-articulo.component.css']
})
export class RutaCrearArticuloComponent implements OnInit {

  constructor(
    private readonly _articuloService:ArticuloService,
    private readonly _router:Router,
  ) { }

  ngOnInit(): void {
  }

  crearArticulo(articulo){
    const obsCrearArticulo = this._articuloService.crearArticulo(articulo);
    obsCrearArticulo
      .subscribe(
        (datos:Object) => {
//          alert('Nuevo articulo creado');
          console.log('Nuevo articulo', datos);
          const url = ['/articulo']
          this._router.navigate(url);
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }



}
