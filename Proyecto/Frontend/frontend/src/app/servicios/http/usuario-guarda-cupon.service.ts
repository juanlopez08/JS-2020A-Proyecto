import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsuarioGuardaCuponService{
  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient:HttpClient
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
  crearUsuarioGuardaCupon(idUsuario, idCupon){
    const usuarioGuardaCupon = {
      "usuario":idUsuario,
      "cupon": idCupon,
      "nombre_guardar_cupon":"Guardado"
    };
    return this._httpClient.post(this.url + '/usuarioGuardaCupon', usuarioGuardaCupon)
  }

  eliminarUsuarioGuardaCupon(idUsuariousuarioGuardaCupon:number){
    return this._httpClient.delete(
      this.url + '/usuarioGuardaCupon/' + idUsuariousuarioGuardaCupon   //URL
    )
  }

}
