import { Component, OnInit } from '@angular/core';
import {CuponService} from "../../servicios/http/cupon.service";
import {Router} from "@angular/router";
import {RutaLoginComponent} from "../ruta-login/ruta-login.component";
import {AuthService} from "../../servicios/auth/auth.service";
import {EsAdminGuard} from "../../servicios/guards/es-admin.guard";
import {UsuarioGuardaCuponService} from "../../servicios/http/usuario-guarda-cupon.service";

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.css']
})
export class RutaInicioComponent implements OnInit {

  arregloCupones = [];

  constructor(
    private readonly _cuponService:CuponService,
    private readonly _router: Router,
    public readonly _authService:AuthService,
    private  readonly _usuarioGuardaCupones:UsuarioGuardaCuponService,
    public readonly _esAdminGuard:EsAdminGuard,
  ) { }


  irAEditarCupon(id:number){
    const ruta = ['/editarCupon', id]
    // /editarCupon/1
    this._router.navigate(ruta) ;
  }

  irAVerCupon(id:number){
    const ruta = ['/detalleCupon', id]
    // /editarCupon/1
    this._router.navigate(ruta) ;
  }

  eliminarCupon(id: number) {
    const obsEliminar = this._cuponService.eliminarCupon(id);
    obsEliminar.subscribe(
        () => {
          // Borrando de la interfaz
          const indice = this.arregloCupones
            .findIndex(u => u.id === id);
          this.arregloCupones.splice(indice, 1);
        },
        (error) => {
          console.error('Error', error);
        }
      );
  }

  guardarCupon(idCupon, idUsuarioGuardaCupon){
    const idUser = this._authService.usuarioAutenticado.id
    const obsCrearUsuarioGuardaCupon = this._usuarioGuardaCupones.crearUsuarioGuardaCupon(idUser, idCupon);
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


  // para mostrar los que estan activos
  // http://localhost:1337/cupon?estado_cupon=activo

  ngOnInit(): void {
    const observableTraerTodos=this._cuponService.traerTodos();
    observableTraerTodos.subscribe(
      (cupones: any[])=>{
        this.arregloCupones = cupones;
         // console.log('AQUIAQUIAQUI',this._authService.usuarioAutenticado)
      },
      (error) => {
        console.error('Error', error);
      }
    )
  }

}
