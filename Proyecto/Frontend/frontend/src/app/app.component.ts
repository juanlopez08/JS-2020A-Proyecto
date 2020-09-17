import {Component, OnInit} from '@angular/core';
import {CuponService} from "./servicios/http/cupon.service";
import {EstablecimientoService} from "./servicios/http/establecimiento.service";

@Component({
  selector: 'your-ticket',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'YourTicket';


  arregloCupones=[]

  arregloObservables=[]


  constructor(
    private readonly _cuponService: CuponService,
    private readonly _establecimientoService: EstablecimientoService,
  ) {

  }

  ngOnInit():void{
    this.mensajeConsola(true);
  }

  mensajeConsola(objeto: boolean) {
    console.log('Llego el evento', objeto);
    const observableTraerTodos = this._cuponService.traerTodos();
    const suscripcion = observableTraerTodos
      .subscribe(
        (data)=>{ // THEN TRY
          this.arregloCupones = data as any[];
          console.log(data);
        },
        (error)=>{ // CATCH
          console.log(error);
        }
      );
    this.arregloObservables.push(suscripcion);
  }


  crearCupon(){
    const nuevoCupon={
      path_imagen_cupon: "https://image.freepik.com/vector-gratis/diseno-plantilla-moderna-cupon_23-2147943314.jpg",
      path_codigo_qr_cupon: "https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024.jpg",
      informacion_cupon: "Descuento 2222",
      estado_cupon: "activo",
      cantidad_usos: 5,
      establecimiento:1
    }
    const obsCrearCupon = this._cuponService.crearCupon(nuevoCupon)
    obsCrearCupon
      .subscribe(
        (datos:Object) => {
          console.log('Nuevo cupon', datos)
          this.mensajeConsola(true);
        },
        (error) => {
          console.error('Error', error);
        }
      )

  }


}
