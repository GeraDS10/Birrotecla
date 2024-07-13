import { Component } from '@angular/core';
import { Beer } from './Beer';
import { NgFor, NgIf , NgClass} from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from "../input-integer/input-integer.component";
import { BeerCartService } from '../beer-cart.service';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, CurrencyPipe, FormsModule, InputIntegerComponent],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.css'
})
export class BeerListComponent {
  beers: Beer[] = [
    {
      name: "Quilmes",
      type: "Blonde",
      price: 1050,
      stock: 10,
      image: "images/quilmes-blonde.png",
      clearance : false,
      quantity:0,
    },
    {
      name: "Quilmes Stout",
      type: "Porter",
      price: 1100,
      stock: 10,
      image: "images/quilmes-stout.jpg",
      clearance : false,
      quantity:0,
    },
    {
      name: "Brahma",
      type: "Blonde",
      price: 1200,
      stock: 10,
      image: "images/brahma-blonde.jpg",
      clearance : false,
      quantity:0,
    },
    {
      name: "Heineken",
      type: "Blonde",
      price: 100,
      stock: 10,
      image: "images/heineken-blonde.jpg",
      clearance : true,
      quantity:0,
    },
    {
      name: "Schneider",
      type: "Blonde",
      price: 1300,
      stock: 10,
      image: "images/schneider-blonde.jpg",
      clearance : false,
      quantity:0,
    }
  ]

  constructor(private cart: BeerCartService){}

  addToCart(beer :Beer): void{
    this.cart.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;
  }
maxReached(m:string){
  console.log(m);
}

}
