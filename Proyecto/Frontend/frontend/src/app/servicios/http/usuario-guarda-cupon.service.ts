import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RutaInicioComponent} from "../../rutas/ruta-inicio/ruta-inicio.component";
import {RutaCuponesGuardadosComponent} from "../../rutas/ruta-cupones-guardados/ruta-cupones-guardados.component";

@Injectable()
export class UsuarioGuardaCuponService{
  url = 'http://localhost:1337'

  // cuponEstaGuardado=false;

  constructor(
    private readonly _httpClient:HttpClient,
    // private readonly _rutaCuponesGuardados:RutaCuponesGuardadosComponent
  ) {
  }

  //http://localhost:1337/usuarioGuardaCupon?usuario=1
  traerCuponesGuardadosPorUsuario(idUsuario){
    return this._httpClient.get(this.url + '/usuarioGuardaCupon?usuario=' + idUsuario)
  }

  traerTodosCuponesGuardados(){
    return this._httpClient.get(this.url + '/usuarioGuardaCupon')
  }

  // http://localhost:1337/usuarioGuardaCupon?usuario=1&cupon=5
  crearUsuarioGuardaCupon(idUsuario, idCupon, cantidadUsosCupon){
    const usuarioGuardaCupon = {
      "usuario":idUsuario,
      "cupon": idCupon,
      "cantidad_usos":cantidadUsosCupon,
    };
    return this._httpClient.post(this.url + '/usuarioGuardaCupon', usuarioGuardaCupon)
  }

  eliminarUsuarioGuardaCupon(idUsuariousuarioGuardaCupon:number){
    return this._httpClient.delete(
      this.url + '/usuarioGuardaCupon/' + idUsuariousuarioGuardaCupon   //URL
    )
  }

  usarCuponGuardado(idUsuarioGuardaCupon:number, fechaActual:string){
    const fechaUso = {
      "fecha_uso":fechaActual,
      "usuarioGuardaCupon":idUsuarioGuardaCupon,
    };
    return this._httpClient.post(
      this.url + '/fechaUso', fechaUso   //URL
    )
  }

  quitarUnUsoDeUsuarioGuardaCupon(idCupon, idUsuario, usos, id){
    const usuarioGuardaCupon = {
      "usuario":idUsuario,
      "cupon": idCupon,
      "cantidad_usos":usos
    }
    return this._httpClient.put(this.url + '/usuarioGuardaCupon/' + id, usuarioGuardaCupon)
  }


  // verCuponGuardado() {
  //   const guardadoActual = this._rutaCuponesGuardados.arregloCuponesGuardados
  //     // .usuarioTieneRoles[0].rol
  //   if (guardadoActual === 1) {
  //     this.cuponEstaGuardado = true
  //   } else {
  //     if (guardadoActual === '2') {
  //       this.cuponEstaGuardado = false
  //     }
  //   }
  //   console.log('ADMIN SI' , this.cuponEstaGuardado)
  // }

}
