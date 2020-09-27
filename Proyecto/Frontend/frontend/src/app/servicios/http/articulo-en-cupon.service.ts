import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ArticuloEnCuponService {
  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  crearArticuloEnCupon(articuloEnCupon) {
    return this._httpClient.post(this.url + '/articuloEnCupon', articuloEnCupon)
  }


}
