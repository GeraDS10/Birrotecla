import { Component } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from '../beer-list/Beer';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartList$: Observable<Beer[]>;
  constructor(private cart: BeerCartService){
    this.cartList$ = cart.cartList.asObservable();
  }
}
