import { Component } from '@angular/core';

@Component({
  selector: 'your-ticket',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YourTicket';

  arregloCupones=[
    {
      id:1,
      url: "https://berninanavarra.com/blog/wp-content/uploads/2019/05/banner-cupon-merceria15.jpg",
      descripcion: "Descuento 1",
      nombreEstablecimiento:"AAAA"
    },
    {
      id:2,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Store_coupons_are_coupon-based_discounts_offered_for_a_particular_item_or_group_of_items.jpg/220px-Store_coupons_are_coupon-based_discounts_offered_for_a_particular_item_or_group_of_items.jpg",
      descripcion: "Descuento 2",
      nombreEstablecimiento:"BBBB"
    },

  ]

  mensajeConsola(objeto:boolean){
    console.log('llego el evento', objeto)
  }

}
