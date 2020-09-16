// usuario.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class CuponService {
  url = 'http://localhost:1337'
  // Constructores en angular sirven para
  // Inyección de Dependencias
  constructor(
    private readonly _httpClient:HttpClient
  ) {
  }

  traerTodos(){
    return this._httpClient.get(this.url + '/cupon')
  }

  //POST / Usuario
  crearCupon(cupon){
    return this._httpClient.post(
      this.url + '/cupon', //URL
      cupon
    )
  }

}
