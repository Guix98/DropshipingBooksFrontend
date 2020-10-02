import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {
  libros: any[];

  constructor(private book: BooksService) {
    console.log(book.getToken());

    this.book.getBooks(book.getToken()).subscribe((data: any) => {
    this.libros = data;
    console.log(data);
   },(error: any) => {
    console.error('error1',error);
   
  }); 
  }





}
