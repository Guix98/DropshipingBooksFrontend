import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  orders: any[];
  ordersArr: any[] = [];
  ordersAux: any[];
  order: any = '';
  idx = '';
  constructor(private books: BooksService) {

}

  ngOnInit(): void {
    this.books.getOrders(this.books.getToken()).subscribe((data: any) => {
      this.orders = data;
      this.ordersAux = data;
    });
  }
  loadModal(id: number){
    this.idx = id.toString();
    this.books.getOneOrder(this.books.getToken(), this.idx).subscribe((data: any) => {
      this.order = data[0];
      console.log(this.order.product_name);

    });
  }
  buscarPedidos(termino: string){
    this.orders = this.ordersAux;
    console.log(this.ordersAux);

    termino = termino.toLowerCase();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0 ; i < this.orders.length; i++  ) {
      const order = this.orders[i];


      const nombre = order.username.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {

        this.ordersArr.push(order);
        console.log(this.ordersArr);
      }

    }


    this.orders = this.ordersArr;
    this.ordersArr = [];
  }

}
