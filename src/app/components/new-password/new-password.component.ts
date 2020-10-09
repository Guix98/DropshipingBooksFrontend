import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent  {
  alerta: boolean;

  constructor() {
    this.alerta=false;
   }
  cont(password1:string , password2:string){
    if (password1 != password2) {
      this.alerta=true;
    }
  }



}
