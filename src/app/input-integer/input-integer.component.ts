import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Beer } from '../beer-list/Beer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-integer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.css'
})
export class InputIntegerComponent {

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  upQuantity(): void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
      
    }
    else{
      this.maxReached.emit("Se alcanzo el máximo");
    }
    
  }

  downQuantity(): void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
    
  }

  changeQuantity(event: any) : void{
    this.quantityChange.emit(this.quantity);
    //LOGICA PARA EVITAR VALORES INCORRECTOS
  }
}
