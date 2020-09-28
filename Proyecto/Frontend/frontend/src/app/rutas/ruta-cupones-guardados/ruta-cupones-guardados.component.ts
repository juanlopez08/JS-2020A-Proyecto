import {Component, OnInit} from '@angular/core';
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

  arregloCuponesGuardados = [];


  constructor(
    private readonly _usuarioGuardaCuponesService: UsuarioGuardaCuponService,
    private readonly _cuponService: CuponService,
    private readonly _router: Router,
    public readonly _authService: AuthService,
    public readonly _esAdminGuard: EsAdminGuard,
  ) {
  }

  eliminarCuponDeGuardados(id: number) {
    const obsEliminarEstablecimiento = this._usuarioGuardaCuponesService.eliminarUsuarioGuardaCupon(id);
    obsEliminarEstablecimiento.subscribe(
      () => {
        //Borrando de la interfaz
        const indice = this.arregloCuponesGuardados
          .findIndex(e => e.id === id);
        this.arregloCuponesGuardados.splice(indice, 1);
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  usarCuponGuardado(idUsuarioGuardaCupon) {
    const fechaActual = new Date();
    const fechaActualString = fechaActual.toString();
// //Año
//     y = n.getFullYear();
// //Mes
//     m = n.getMonth() + 1;
// //Día
//     d = n.getDate();
//     console.log('Arreglo Guardados', this.arregloCuponesGuardados)
    const obsUsarCuponGuardado = this._usuarioGuardaCuponesService.usarCuponGuardado(idUsuarioGuardaCupon, fechaActualString)
    obsUsarCuponGuardado.subscribe(
      (datos: Object) => {
        console.log('Nuevo uso', datos);
        alert('Se utilizo el cupon');
        const url = ['/cuponesGuardados']
        this._router.navigate(url)
      },
      (error) => {
        console.error('Error', error);
      }
    )

  }

  quitarUnUsoDelCuponGuardado(idUsuarioGuardaCupon, idCupon) {
    const indice = this.arregloCuponesGuardados.findIndex(e => e.id === idUsuarioGuardaCupon);
    const usos = Number(this.arregloCuponesGuardados[indice]['cantidad_usos']);
    const usosActualizados = usos - 1;
    // const idCupon = this.arregloCuponesGuardados[indice]['id'];
    const idUsuario = this._authService.usuarioAutenticado.id;
    // console.log('Usos', usos)
    // console.log('IdCupon', idCupon)
    // console.log('idUsuario', idUsuario)

    // const cuponUsadoActualizado = {
    //
    // };
    //
    // this.arregloCuponesGuardados.push(cuponUsadoActualizado)

    const obsQuitarUnUsoDelCuponGuardado = this._usuarioGuardaCuponesService
      .quitarUnUsoDeUsuarioGuardaCupon(idCupon, idUsuario, usosActualizados, idUsuarioGuardaCupon);
    obsQuitarUnUsoDelCuponGuardado.subscribe(
      (datos: Object) => {
        console.log('Datos', datos)
        this.arregloCuponesGuardados[indice] = datos;
        const url = ['/cuponesGuardados']
        this._router.navigate(url);
      },
      (error) => {
        console.error('Error', error)
        const url = ['/cuponesGuardados']
        this._router.navigate(url);
      }
    )


  }


  ngOnInit(): void {
    const observableTraerTodos = this._usuarioGuardaCuponesService.traerCuponesGuardadosPorUsuario(this._authService.usuarioAutenticado.id);
    observableTraerTodos.subscribe(
      (cupones: any[]) => {
        this.arregloCuponesGuardados = cupones;
        console.log('arregloCuponesGuardados', this.arregloCuponesGuardados)
      },
      (error) => {
        console.error('Error', error);
      }
    )
  }


}
