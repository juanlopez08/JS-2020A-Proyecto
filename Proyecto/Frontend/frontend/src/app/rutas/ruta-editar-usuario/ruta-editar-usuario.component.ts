import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {

  usuario;
  mostrarFormulario=false;

  constructor(
    private readonly _usuarioService:UsuarioService,
    private readonly _activatedRoute:ActivatedRoute,
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params)=>{
        const id = Number(parametros.id);
        const obsUsuario = this._usuarioService.obtenerUnUsuarioPorId(id);
        obsUsuario.subscribe(
          (usuario:any)=>{
            this.usuario = usuario
            this.llenarFormularioUsuario()
          },
          (error)=>{
            console.error('Error', error)
          }
        )
      }
    )
  }

  llenarFormularioUsuario(){
    this.mostrarFormulario=true;
  }

  editarUsuario(usuario){
    const obsEditarUsuario=this._usuarioService.editarUsuario(usuario, this.usuario.id)
    obsEditarUsuario.subscribe(
      (datos:Object)=>{
        const url = ['/usuarios']
        this._router.navigate(url);
      },
      (error)=>{console.error('Error', error)}
    )
  }

}
