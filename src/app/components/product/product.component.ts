import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  nombre: string;
  libro: any;


  constructor(private book: BooksService,
              private ActivatedRoute: ActivatedRoute,
              private router: Router) {
}
    ngOnInit(): void {
        
        this.ActivatedRoute.params.subscribe(params => {
        this.nombre = params.name;
        

});


        this.book.getOneBook(this.book.getToken(), this.nombre).subscribe((data: any) => {
          console.log(data[0]);

          
    this.libro = data[0];
      }, (error: any) => {
        console.error('error1', error);


});
}


}
