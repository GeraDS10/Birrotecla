import { Component } from '@angular/core';
import { BeerListComponent } from '../beer-list/beer-list.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-birrotecla-beers',
  standalone: true,
  imports: [BeerListComponent, CartComponent],
  templateUrl: './birrotecla-beers.component.html',
  styleUrl: './birrotecla-beers.component.css'
})
export class BirroteclaBeersComponent {

}
