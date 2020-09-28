import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class UsuarioTieneRolService {
  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  traerTodosUsuarioTieneRoles() {
    return this._httpClient.get(this.url + '/usuarioTieneRol')
  }


  crearUsuarioTieneRol(rol) {
    return this._httpClient.post(this.url + '/usuarioTieneRol', rol)
  }


  editarUsuarioTieneRol(rol, id) {
    return this._httpClient.put(this.url + '/usuarioTieneRol/' + id, rol)
  }


  obtenerUsuarioTieneRolPorId(idRol: number) {
    return this._httpClient.get(this.url + '/usuarioTieneRol/' + idRol)
  }


  eliminarUsuarioTieneRol(idRol: number) {
    return this._httpClient.delete(
      this.url + '/rol/' + idRol
    )
  }


}
