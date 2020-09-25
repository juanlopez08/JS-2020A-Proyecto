import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  estaAutenticado = false;
  usuarioAutenticado;

  url = 'http://localhost:1337';
  roles = [
      'admin',
    //  'usuario'
  ];

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  login(correo: string, password: string) {
    return this._httpClient.get(
      this.url + '/Usuario?correo_usuario=' + correo + '&password_usuario=' + password
    )
  }



}
