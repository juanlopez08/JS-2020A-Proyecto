import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class EstablecimientoService {
  url = 'http://localhost:1337'
  // Constructores en angular sirven para
  // Inyección de Dependencias
  constructor(
    private readonly _httpClient:HttpClient
  ) {
  }

  traerTodosEstablecimientos(consulta?:string){
    return this._httpClient.get(this.url + '/establecimiento?' + consulta)
  }

  //POST / Establecimiento
  crearEstablecimiento(establecimiento){
    return this._httpClient.post(this.url + '/establecimiento', establecimiento)
  }

  editarEstablecimiento(establecimiento, id){
    return this._httpClient.put(this.url + '/establecimiento/' + id, establecimiento)
  }


  //GET / Establecimiento
  obtenerUnEstablecimientoPorId(idEstablecimiento:number){
    return this._httpClient.get(this.url + '/establecimiento/' + idEstablecimiento)
  }

  //DELETE / Establecimiento
  eliminarEstablecimiento(idEstablecimiento:number){
    return this._httpClient.delete(
      this.url + '/establecimiento/' + idEstablecimiento   //URL
    )
  }


}
