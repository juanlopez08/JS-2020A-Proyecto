import { Component, OnInit } from '@angular/core';
import {CuponService} from "../../servicios/http/cupon.service";
import {UsuarioTieneRolService} from "../../servicios/http/usuario-tiene-rol.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-lista-cupon',
  templateUrl: './ruta-lista-cupon.component.html',
  styleUrls: ['./ruta-lista-cupon.component.css']
})
export class RutaListaCuponComponent implements OnInit {

  rol:[{
    "usuario": 15,
    "rol":2,
    "nombre_relacion":"usuarioTieneRol"
  }]

  constructor(
    private readonly _usuarioTieneRolService:UsuarioTieneRolService,
    private readonly _router:Router,
  ) { }

  ngOnInit(): void {
  }
  //
  // crearUsuarioTieneRol(rol){
  //   const obsCrearUsuarioTieneRol = this._usuarioTieneRolService.crearUsuarioTieneRol({
  //     "usuario": 15,
  //     "rol":2,
  //     "nombre_relacion":"usuarioTieneRol"
  //   });
  //   obsCrearUsuarioTieneRol
  //     .subscribe(
  //       (datos:Object) => {
  //         //   alert('Nuevo usuario creado');
  //
  //         console.log('Nuevo Rol', datos);
  //         const url = ['/listaCupon']
  //         this._router.navigate(url);
  //       },
  //       (error) => {
  //         console.log('Rol:' , JSON.stringify(this.rol))
  //         console.error('Error', error);
  //         alert('No se creo el rol')
  //       }
  //     )
  // }

}
