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

  constructor(
    private readonly _usuarioService:UsuarioService,
    private readonly _router:Router,
  ) { }

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
    const observableTraerTodosUsuarios=this._usuarioService.traerTodosUsuarios();
    observableTraerTodosUsuarios.subscribe(
      (usuarios:any[])=>{
        this.arregloUsuario = usuarios;
      },
      (error)=>{
        console.error('Error', error);
      }
    )
  }

}








