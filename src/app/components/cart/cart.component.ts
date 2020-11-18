import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from '../../services/globaldata.service';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carrito:Cart[];
  vacio = true;

  constructor(globaldata: GlobaldataService) {
    this.carrito=globaldata.carrito;
    if (this.carrito.length>0) {
      this.vacio = false;
    }
   }

  ngOnInit(): void {
  

  }

}
