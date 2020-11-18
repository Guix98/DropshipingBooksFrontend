import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { guser } from '../models/g-user';

@Injectable({
  providedIn: 'root'
})
export class GlobaldataService {

  constructor() { }
  carrito: Cart[];
  logus: guser;

}
