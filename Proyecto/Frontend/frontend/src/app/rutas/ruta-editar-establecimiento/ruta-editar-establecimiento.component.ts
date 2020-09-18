import { Component, OnInit } from '@angular/core';
import {EstablecimientoService} from "../../servicios/http/establecimiento.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-establecimiento',
  templateUrl: './ruta-editar-establecimiento.component.html',
  styleUrls: ['./ruta-editar-establecimiento.component.css']
})
export class RutaEditarEstablecimientoComponent implements OnInit {

  establecimiento;
  constructor(
    private readonly _establecimientoService:EstablecimientoService,
    private readonly _activatedRoute: ActivatedRoute,
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
          },
          (error)=>{
            console.error('Error', error)
          }
        )
      }
    )
  }

}
