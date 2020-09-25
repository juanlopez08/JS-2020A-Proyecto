import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {Router} from "@angular/router";
import {RolesService} from "../../servicios/http/roles.service";
import {UsuarioTieneRolService} from "../../servicios/http/usuario-tiene-rol.service";
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-ruta-registro',
  templateUrl: './ruta-registro.component.html',
  styleUrls: ['./ruta-registro.component.css']
})
export class RutaRegistroComponent implements OnInit {


  constructor(
    private readonly _usuarioService:UsuarioService,
    private readonly _usuarioTieneRolService:UsuarioTieneRolService,
    private readonly _router:Router,
  ) { }

  //  CREAR EL USUARIO TIENE ROL AL REGISTRAR USUARIO

  ngOnInit(): void {
  }



  crearUsuario(usuario){
    const obsCrearUsuario = this._usuarioService.crearUsuario(usuario);
    obsCrearUsuario
      .subscribe(
        (datos:Object) => {
          //   alert('Nuevo usuario creado');



        //   this._usuarioTieneRolService.crearUsuarioTieneRol(
        //     {
        //     "usuario": 11,
        //       "rol":2,
        //       "nombre_relacion":"desde registro"
        //   }
        // )
          console.log('Nuevo Usuario', datos['id']);
          const idUsuario = usuario.id
          console.log('IDIDID', datos['id'])

          this.crearUsuarioTieneRol(datos['id'])
          const url = ['/login']
          this._router.navigate(url);
        },
        (error) => {
          console.error('Error', error);
          alert('Ingrese un correo valido')
        }
      )
  }

  crearUsuarioTieneRol(id:number){
    const obsCrearUsuarioTieneRol = this._usuarioTieneRolService.crearUsuarioTieneRol({
      "usuario": id,
      "rol":2,
      "nombre_relacion":"usuarioTieneRol"
    });
    obsCrearUsuarioTieneRol
      .subscribe(
        (datos:Object) => {
          //   alert('Nuevo usuario creado');

          console.log('Nuevo Rol', datos);
          const url = ['/listaCupon']
          this._router.navigate(url);
        },
        (error) => {
          // console.log('Rol:' , JSON.stringify(this.rol))
          console.error('Error', error);
          alert('No se creo el rol')
        }
      )
  }

}
