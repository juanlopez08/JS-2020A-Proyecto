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
    return this._httpClient.get(this.url + 'usuarioGuardaCupon?usuario=' + idUsuario)
  }

  traerTodosCuponesGuardadosPorUsuario(){
    return this._httpClient.get(this.url + '/usuarioGuardaCupon')
  }

}
