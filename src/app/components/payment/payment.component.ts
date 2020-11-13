import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { PaymentIntent } from '../../models/payment-intent';
import { BooksService } from '../../services/books.service';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
 
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @ViewChild(StripeCardComponent) card: StripeCardComponent;
 
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };
 
  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };
 
  stripeTest: FormGroup;
 
  constructor(private fb: FormBuilder, private stripeService: StripeService, private books:BooksService) {}
 
  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
  }
 
  createToken(): void {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          const pago:PaymentIntent = {
            token: result.token.id,
            amount: 35000,
            currency: 'USD',
            description: 'aqui va la descripcion del producto'
          };
          this.books.pagar(pago).subscribe((data:any)=>{
            console.log(data);
          })

          console.log(result.token.id);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }

}
