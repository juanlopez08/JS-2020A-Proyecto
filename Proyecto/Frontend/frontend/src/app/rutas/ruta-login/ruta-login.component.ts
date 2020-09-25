import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {

  correoModelo: string;
  passwordModelo: string;
  usuarioGuardado;

  constructor(
    public readonly _authService: AuthService,
    private readonly _router:Router
  ) {}

  ngOnInit(): void {
  }

  revisarLogin(formulario) {
    const obsLogin = this._authService.login(this.correoModelo, this.passwordModelo);
    obsLogin
      .subscribe(
        (arregloUsuarios: any[]) => {
          if( arregloUsuarios.length > 0){
            // console.log('Arreglo usuarios',arregloUsuarios)
            this.usuarioGuardado = arregloUsuarios[0];

            this.devolverUsuarioLogeado()
            this._authService.estaAutenticado = true;
            // JSON.stringify(
            this._authService.usuarioAutenticado = this.usuarioGuardado

            console.log('JAJAJAJAJ',this._authService.usuarioAutenticado )

            this.irAInicio()
          }else{
            this._authService.estaAutenticado =false;
            alert('Credenciales incorrectas');
          }

        },
        (error)=>{
          console.error(error)
        }
      )
  }

  devolverUsuarioLogeado(){
    console.log('this.usuarioGuardado',this.usuarioGuardado)
    return this.usuarioGuardado
  }

  irAInicio(){
    const url = ['inicio']
    this._router.navigate(url)
  }

}
