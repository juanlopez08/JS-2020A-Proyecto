import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class UsuarioService {
  url = 'http://localhost:1337'
  // Constructores en angular sirven para
  // Inyección de Dependencias
  constructor(
    private readonly _httpClient:HttpClient
  ) {
  }

  traerTodosUsuarios(consulta?:string){
    return this._httpClient.get(this.url + '/usuario?' + consulta)
  }

  //POST / usuario
  crearUsuario(usuario){
    return this._httpClient.post(this.url + '/usuario', usuario)
  }

  editarUsuario(usuario, id){
    return this._httpClient.put(this.url + '/usuario/' + id , usuario)
  }

  //GET / usuario
  obtenerUnUsuarioPorId(idUsuario:number){
    return this._httpClient.get(this.url + '/usuario/' + idUsuario)
  }

  //DELETE / usuario
  eliminarUsuario(idUsuario:number){
    return this._httpClient.delete(
      this.url + '/usuario/' + idUsuario   //URL
    )
  }


}
