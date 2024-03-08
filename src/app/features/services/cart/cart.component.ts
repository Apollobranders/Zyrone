import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { RouterLink } from '@angular/router';
import { EmptyDataComponent } from '../../../components/empty-data/empty-data.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    RouterLink,
    EmptyDataComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart: any[] = [];
  totalPrice: string = "";

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.getItems();
  }

}
