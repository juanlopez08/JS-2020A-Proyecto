import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../servicios/auth/auth.service";
import {EsAdminGuard} from "../../servicios/guards/es-admin.guard";
import {UsuarioGuardaCuponService} from "../../servicios/http/usuario-guarda-cupon.service";
import {CuponService} from "../../servicios/http/cupon.service";

@Component({
  selector: 'app-ruta-cupones-guardados',
  templateUrl: './ruta-cupones-guardados.component.html',
  styleUrls: ['./ruta-cupones-guardados.component.css']
})
export class RutaCuponesGuardadosComponent implements OnInit {

  arregloCuponesGuardados=[];

  constructor(
    private  readonly _usuarioGuardaCupones:UsuarioGuardaCuponService,
    private readonly _cuponService:CuponService,
    private readonly _router: Router,
    public readonly _authService:AuthService,
    public readonly _esAdminGuard:EsAdminGuard,
  ) { }

  ngOnInit(): void {
    const observableTraerTodos=this._usuarioGuardaCupones.traerTodosCuponesGuardadosPorUsuario();
    observableTraerTodos.subscribe(
      (cupones: any[])=>{
        this.arregloCuponesGuardados = cupones;
         console.log('arregloCuponesGuardados',this.arregloCuponesGuardados)
      },
      (error) => {
        console.error('Error', error);
      }
    )
  }

  guardarCupon(usuarioGuardaCupon){
    const obsCrearUsuarioGuardaCupon = this._usuarioGuardaCupones.crearUsuarioGuardaCupon(usuarioGuardaCupon);
    obsCrearUsuarioGuardaCupon
      .subscribe(
        (datos:Object) => {
//          alert('Nuevo Usuario Guarda Cupon');
          console.log('Nuevo Usuario Guarda Cupon', datos);
          const url = ['/inicio']
          this._router.navigate(url)
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }

}
