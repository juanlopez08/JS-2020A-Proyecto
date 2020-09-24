import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class RolesService {
  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient:HttpClient
  ) {}

  traerTodosRoles(){
    return this._httpClient.get(this.url + '/rol')
  }


  crearRol(rol){
    return this._httpClient.post(this.url + '/rol' , rol )
  }


  editarRol(rol, id){
    return this._httpClient.put(this.url + '/rol/' + id , rol)
  }



  obtenerRolPorId(idRol:number){
    return this._httpClient.get(this.url + '/rol/' + idRol)
  }


  eliminarRol(idRol:number){
    return this._httpClient.delete(
      this.url + '/rol/' + idRol
    )
  }

}
