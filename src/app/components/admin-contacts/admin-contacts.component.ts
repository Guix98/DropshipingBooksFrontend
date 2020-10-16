import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-admin-contacts',
  templateUrl: './admin-contacts.component.html',
  styleUrls: ['./admin-contacts.component.css']
})
export class AdminContactsComponent  {
  providers: any[];

  constructor(private books: BooksService) { 
      this.books.getProviders(this.books.getToken()).subscribe((data:any)=>{
        this.providers = data;
      });
  }


  
}
