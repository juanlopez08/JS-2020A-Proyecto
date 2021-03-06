// usuario.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class ArticuloService {
  url = 'http://localhost:1337'
  // Constructores en angular sirven para
  // Inyección de Dependencias
  constructor(
    private readonly _httpClient:HttpClient
  ) {
  }

  traerTodosArticulos(consulta?:string){
    return this._httpClient.get(this.url + '/articulo?' + consulta)
  }

  //POST / articulo
  crearArticulo(articulo){
    return this._httpClient.post(this.url + '/articulo', articulo)
  }

  //POST / articulo
  editarArticulo(articulo, id){
    return this._httpClient.put(this.url + '/articulo/' + id, articulo)
  }


  //GET / Cupon
  obtenerUnArticuloPorId(idArticulo:number){
    return this._httpClient.get(this.url + '/articulo/' + idArticulo)
  }

  //DELETE / Cupon
  eliminarArticulo(idArticulo:number){
    return this._httpClient.delete(
      this.url + '/articulo/' + idArticulo   //URL
    )
  }


}
