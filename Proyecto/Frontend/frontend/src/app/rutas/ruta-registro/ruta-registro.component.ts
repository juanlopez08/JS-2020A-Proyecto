import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-registro',
  templateUrl: './ruta-registro.component.html',
  styleUrls: ['./ruta-registro.component.css']
})
export class RutaRegistroComponent implements OnInit {

  constructor(
    private readonly _usuarioService:UsuarioService,
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
  }

  crearUsuario(usuario){
    const obsCrearUsuario = this._usuarioService.crearUsuario(usuario);
    obsCrearUsuario
      .subscribe(
        (datos:Object) => {
          //   alert('Nuevo usuario creado');
          console.log('Nuevo Usuario', datos);
          const url = ['/login']
          this._router.navigate(url);
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }

}
