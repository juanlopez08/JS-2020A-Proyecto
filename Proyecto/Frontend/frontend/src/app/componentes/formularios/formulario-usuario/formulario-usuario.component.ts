import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsuarioService} from "../../../servicios/http/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  @Input()
  cedulaUsuarioInput: string;

  @Input()
  nombreUsuarioInput: string;

  @Input()
  apellidoUsuarioInput: string;

  @Input()
  correoUsuarioInput: string;

  @Input()
  passwordUsuarioInput: string;

  @Input()
  birthdateUsuarioInput: string;

  @Output()
  informacionUsuarioValidada: EventEmitter<any> = new EventEmitter<any>()


  constructor(
    private readonly _usuarioService:UsuarioService,
    private readonly _router: Router
  ) { }

  cedulaUsuario: string;
  nombreUsuario: string;
  apellidoUsuario: string;
  correoUsuario: string;
  passwordUsuario: string;
  birthdateUsuario: string;

  ngOnInit(): void {
    if( this.cedulaUsuarioInput &&
      this.nombreUsuarioInput &&
      this.apellidoUsuarioInput &&
      this.correoUsuarioInput &&
      this.passwordUsuarioInput &&
      this.birthdateUsuarioInput
    ){
      this.cedulaUsuario=this.cedulaUsuarioInput;
      this.nombreUsuario=this.nombreUsuarioInput;
      this.apellidoUsuario=this.apellidoUsuarioInput;
      this.correoUsuario=this.correoUsuarioInput;
      this.passwordUsuario=this.passwordUsuarioInput;
      this.birthdateUsuario=this.birthdateUsuarioInput;
    }
  }


  crearUsuario(formulario){
    console.log(formulario);
    const cedula = this.cedulaUsuario
    const esNumero = !Number.isNaN(Number(cedula))
    if(esNumero){
      this.informacionUsuarioValidada.emit({
        cedula: this.cedulaUsuario,
        nombre_usuario: this.nombreUsuario,
        apellido_usuario: this.apellidoUsuario,
        correo_usuario: this.correoUsuario,
        password_usuario: this.passwordUsuario,
        birthdate_usuario: this.birthdateUsuario,
      })
    }else{
      console.error('NO ES UN NUMERO')
    }
  }


  ayudaCrearUsuario(){
    alert('Todos los campos son necesarios para esta operacion')
  }


}
