import { Component, OnInit } from '@angular/core';
import {EstablecimientoService} from "../../servicios/http/establecimiento.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-establecimiento',
  templateUrl: './ruta-crear-establecimiento.component.html',
  styleUrls: ['./ruta-crear-establecimiento.component.css']
})
export class RutaCrearEstablecimientoComponent implements OnInit {

  constructor(
    private readonly _establecimientoService:EstablecimientoService,
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
  }

  crearEstablecimiento(establecimiento){
    const obsCrearEstablecimiento = this._establecimientoService.crearEstablecimiento(establecimiento);
    obsCrearEstablecimiento.subscribe(
      (datos:Object)=>{
        const url = ['establecimiento']
        this._router.navigate(url)
      },
      (error)=>{console.error('Error', error)}
    );
  }

}
