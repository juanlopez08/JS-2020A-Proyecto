import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carta-cupon',
  templateUrl: './carta-cupon.component.html',
  styleUrls: ['./carta-cupon.component.css']
})
export class CartaCuponComponent implements OnInit {
  @Input()
  urlImagenCupon: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  eventoDioClicEnBoton:EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  eventoDioClicEnImagen:EventEmitter<boolean> = new EventEmitter<boolean>()

  ejemploFuncion(){
    alert('HOLA')
  }
  eventoOnBlur(){
    console.log('Blur')
  }

  ejecutarEventoDioClic(){
    this.eventoDioClicEnBoton.emit(true)
  }

  ejecutarEventoDioClicImagen(){
    this.eventoDioClicEnImagen.emit(true)
  }

}
