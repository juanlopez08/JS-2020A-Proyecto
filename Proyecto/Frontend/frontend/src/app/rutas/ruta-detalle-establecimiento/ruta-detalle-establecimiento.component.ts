import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CuponService} from "../../servicios/http/cupon.service";
import {EstablecimientoService} from "../../servicios/http/establecimiento.service";
import {AuthService} from "../../servicios/auth/auth.service";
import {UsuarioGuardaCuponService} from "../../servicios/http/usuario-guarda-cupon.service";

@Component({
  selector: 'app-ruta-detalle-establecimiento',
  templateUrl: './ruta-detalle-establecimiento.component.html',
  styleUrls: ['./ruta-detalle-establecimiento.component.css']
})
export class RutaDetalleEstablecimientoComponent implements OnInit {

  establecimiento;
  arregloCuponesDelEstablecimiento;

  constructor(
    private readonly _establecimientoService:EstablecimientoService,
    private readonly _cuponService:CuponService,
    public readonly _authService:AuthService,
    private readonly _activatedRoute: ActivatedRoute,
    private  readonly _usuarioGuardaCupones:UsuarioGuardaCuponService,
    private readonly _router: Router,
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


  guardarCupon(idCupon, idUsuarioGuardaCupon){
    const idUser = this._authService.usuarioAutenticado.id
    const indiceDelCupon =  this.arregloCuponesDelEstablecimiento.findIndex(u => u.id === idCupon);
    const cantidadUsos = this.arregloCuponesDelEstablecimiento[indiceDelCupon]['cantidad_usos']
    const obsCrearUsuarioGuardaCupon = this._usuarioGuardaCupones.crearUsuarioGuardaCupon(idUser, idCupon, cantidadUsos);
    obsCrearUsuarioGuardaCupon
      .subscribe(
        (datos:Object) => {
//          alert('Nuevo Usuario Guarda Cupon');
          console.log('Nuevo Usuario Guarda Cupon', datos);
          alert('Cupon Guardado')
          const url = ['/cuponesGuardados']
          this._router.navigate(url)
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }


  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => { //try
        const id = Number(parametros.id);
        const obsEstablecimiento = this._establecimientoService.obtenerUnEstablecimientoPorId(id);
        obsEstablecimiento.subscribe(
          (establecimiento:any)=>{
            this.establecimiento = establecimiento
            this.arregloCuponesDelEstablecimiento = establecimiento['cupones']
            // console.log('Este bro',establecimiento['cupones'])
            console.log('Este bro',this.arregloCuponesDelEstablecimiento)
          },
          (error)=>{
            console.error('Error', error)
          }
        )
      }
    )
  }

}
