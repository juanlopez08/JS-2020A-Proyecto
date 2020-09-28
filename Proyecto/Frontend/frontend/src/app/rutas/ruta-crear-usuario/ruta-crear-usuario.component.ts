import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {Router} from "@angular/router";
import {UsuarioTieneRolService} from "../../servicios/http/usuario-tiene-rol.service";

@Component({
  selector: 'app-ruta-crear-usuario',
  templateUrl: './ruta-crear-usuario.component.html',
  styleUrls: ['./ruta-crear-usuario.component.css']
})
export class RutaCrearUsuarioComponent implements OnInit {

  constructor(
    private readonly _usuarioService:UsuarioService,
    private readonly _usuarioTieneRolService:UsuarioTieneRolService,
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
            this.crearUsuarioTieneRolAdmin(datos['id'])
            const url = ['/usuarios']
            this._router.navigate(url);
          },
        (error) => {
          console.error('Error', error);
        }
      )
  }

  crearUsuarioTieneRolAdmin(id:number){
    const obsCrearUsuarioTieneRol = this._usuarioTieneRolService.crearUsuarioTieneRol({
      "usuario": id,
      "rol":1,
      "nombre_relacion":"usuarioTieneRol"
    });
    obsCrearUsuarioTieneRol
      .subscribe(
        (datos:Object) => {
          //   alert('Nuevo usuario creado');

          console.log('Nuevo Rol', datos);
          const url = ['/usuarios']
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
