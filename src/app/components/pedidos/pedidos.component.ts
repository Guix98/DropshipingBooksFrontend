import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  providers: any[];
  order:any;
  idx:string;
  constructor(private books: BooksService) { 
    
}

  ngOnInit(): void {
    this.books.getOrders(this.books.getToken()).subscribe((data:any)=>{
      this.providers = data;
    });
  }
  loadModal(id:number){
    this.idx = id.toString();
    this.books.getOneOrder(this.books.getToken(), this.idx).subscribe((data: any) => {
      this.order = data[0];
      console.log(this.order.product_name);
      
    });
  }

}
