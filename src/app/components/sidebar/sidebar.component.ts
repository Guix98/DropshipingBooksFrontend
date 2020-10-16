import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
categories:any[];
  constructor(private book: BooksService,
              private router: Router) { 
    this.book.getCategory(book.getToken()).subscribe((data: any) => {
      this.categories = data;
      console.log(this.categories);

     },(error: any) => {
      console.error('error1',error);
     
    });
  console.log('1');
  
  }
  gotocat(cat: string){
    console.log(cat);
    
    this.router.navigate(['cat/', cat]);
    
    
    
  }

 
}
