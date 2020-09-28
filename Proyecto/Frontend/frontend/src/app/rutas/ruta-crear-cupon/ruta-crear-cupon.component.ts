import { Component, OnInit } from '@angular/core';
import {CuponService} from "../../servicios/http/cupon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-cupon',
  templateUrl: './ruta-crear-cupon.component.html',
  styleUrls: ['./ruta-crear-cupon.component.css']
})
export class RutaCrearCuponComponent implements OnInit {


  constructor(
    private readonly _cuponService:CuponService,
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
  }

  crearCupon(cupon){
    const obsCrearCupon = this._cuponService.crearCupon(cupon);
    obsCrearCupon
      .subscribe(
        (datos:Object) => {
//          alert('Nuevo cupon creado');
          console.log('Nuevo Cupon', datos);
          const url = ['/inicio']
          this._router.navigate(url)
        },
        (error) => {
          console.error('Error', error);
        }
      )

  }


}
