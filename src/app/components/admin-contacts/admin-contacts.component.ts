import { Component, OnInit } from '@angular/core';
import { BooksService, Contact } from '../../services/books.service';

@Component({
  selector: 'app-admin-contacts',
  templateUrl: './admin-contacts.component.html',
  styleUrls: ['./admin-contacts.component.css']
})
export class AdminContactsComponent  {
  providers: Contact[];
  providersAux: Contact[];
  providersArr: Contact[] = [];



  constructor(private books: BooksService) {
      this.books.getProviders(this.books.getToken()).subscribe((data: any) => {
        this.providers = data;
        console.log(this.providers.length);
        this.providersAux = data;

      });
  }
  buscarProveedores(termino: string){
    this.providers = this.providersAux;
    console.log(this.providersArr);

    termino = termino.toLowerCase();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0 ; i < this.providers.length; i++  ) {
      const provider = this.providers[i];


      const nombre = provider.provider_name.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {

        this.providersArr.push(provider);
        console.log(this.providersArr);
      }

    }


    this.providers = this.providersArr;
    this.providersArr = [];
  }



}
