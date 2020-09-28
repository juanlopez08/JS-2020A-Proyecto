import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.css']
})
export class RutaUsuarioComponent implements OnInit {

  arregloUsuario = [];
  busquedaModeloUsuarios = '';

  constructor(
    private readonly _usuarioService:UsuarioService,
    private readonly _router:Router,
  ) { }

  filtrarUsuarios(){
    const consultaUsuarios = {
      or:[
        {cedula:{contains:this.busquedaModeloUsuarios}},
        {nombre_usuario:{contains:this.busquedaModeloUsuarios}},
        {apellido_usuario:{contains:this.busquedaModeloUsuarios}},
        {correo_usuario:{contains:this.busquedaModeloUsuarios}},
        {birthdate_usuario:{contains:this.busquedaModeloUsuarios}},
      ]
    }
    const consultaUsuariosString = 'where=' + JSON.stringify(consultaUsuarios);

    const observableTraerTodosUsuarios=this._usuarioService
      .traerTodosUsuarios(this.busquedaModeloUsuarios != '' ? consultaUsuariosString : '');
    observableTraerTodosUsuarios.subscribe(
      (usuarios:any[])=>{
        this.arregloUsuario = usuarios;
      },
      (error)=>{
        console.error('Error', error);
      }
    )
  }

  irAeditarUsuario(id:number){
    const ruta = ['/editarUsuario', id]
    this._router.navigate(ruta);
  }

  eliminarUsuario(id:number){
    const obsEliminarUsuario = this._usuarioService.eliminarUsuario(id);
    obsEliminarUsuario.subscribe(
      ()=>{
        const indice = this.arregloUsuario
          .findIndex(u => u.id === id);
        this.arregloUsuario.splice(indice, 1);
      },
      (error)=>{
        console.error('Error', error);
      }
    );
  }

  ngOnInit(): void {
    this.filtrarUsuarios()
  }

}








