import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RolesService} from "../http/roles.service";

@Injectable()
export class AuthService {
  estaAutenticado = false;
  usuarioAutenticado;

  url = 'http://localhost:1337';
  roles = [
      // 'admin',
    //  'usuario'
  ];

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _rolesService:RolesService
  ) {
  }

  login(correo: string, password: string) {
    return this._httpClient.get(
      this.url + '/Usuario?correo_usuario=' + correo + '&password_usuario=' + password
    )
  }

  llenarRol(){
    const rolUsuarioAutenticado = this._rolesService.obtenerRolPorId(this.usuarioAutenticado.id)
    this.roles.push(rolUsuarioAutenticado);
  }


}
