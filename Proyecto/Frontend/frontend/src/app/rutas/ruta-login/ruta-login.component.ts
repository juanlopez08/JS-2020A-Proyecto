import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {

  correoModelo: string;
  passwordModelo: string;

  constructor(public readonly _authService: AuthService) {
  }

  ngOnInit(): void {
  }

  revisarLogin(formulario) {
    const obsLogin = this._authService.login(this.correoModelo, this.passwordModelo);
    obsLogin
      .subscribe(
        (arregloUsuarios: any[]) => {
          if( arregloUsuarios.length > 0){

            this._authService.estaAutenticado = true;

          }else{
            this._authService.estaAutenticado =false;
          }

        },
        (error)=>{
          console.error(error)
        }
      )


  }
}
