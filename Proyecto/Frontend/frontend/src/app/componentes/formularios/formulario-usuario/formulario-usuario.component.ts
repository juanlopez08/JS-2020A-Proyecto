import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../../servicios/http/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  constructor(
    private readonly _usuarioService:UsuarioService,
    private readonly _router: Router
  ) { }

  cedulaUsuario: string;
  nombreUsuario: string;
  apellidoUsuario: string;
  correoUsuario: string;
  passwordUsuario: string;
  birthdateUsuario: string;

  ngOnInit(): void {
  }


  crearUsuario(formulario){
    console.log(formulario);
    const usuarioNuevo = {
      cedula: this.cedulaUsuario,
      nombre_usuario: this.nombreUsuario,
      apellido_usuario: this.apellidoUsuario,
      correo_usuario: this.correoUsuario,
      password_usuario: this.passwordUsuario,
      birthdate_usuario: this.birthdateUsuario,
    };
    const obsCrearUsuario = this._usuarioService.crearUsuario(usuarioNuevo);
    obsCrearUsuario
      .subscribe(
        (datos:Object) => {
          alert('Nuevo usuario creado');
          console.log('Nuevo Usuario', datos);
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }


  ayudaCrearUsuario(){
    alert('Todos los campos son necesarios para esta operacion')
  }


}
