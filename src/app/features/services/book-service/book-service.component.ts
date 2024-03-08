import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmptyDataComponent } from '../../../components/empty-data/empty-data.component';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-book-service',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    EmptyDataComponent
  ],
  templateUrl: './book-service.component.html',
  styleUrl: './book-service.component.scss'
})
export class BookServiceComponent {
  categories: any[] = [
    {image: 'assets/img/category-1.png', name: 'Regeneration', selected: true},
    {image: 'assets/img/category-1.png', name: 'Maintenance', selected: false}
  ];
  services: any[] = [
    {
      image: 'assets/img/category-1.png',
      name: 'One Time Maintenance',
      price: '899',
      content: '<ul><li class="">100% colophony free, low-heat, uniform wax</li><li>Recommended for all skin types, particularly </li><li>100% colophony free, low-heat, uniform wax</li><li>Recommended for all skin types, <a href="#">Read More</a></li></ul>',
      selected: false
    },
    {
      image: 'assets/img/category-1.png',
      name: 'Maintenance AMC',
      price: '899',
      content: '<ul><li class="">100% colophony free, low-heat, uniform wax</li><li>Recommended for all skin types, particularly </li><li>100% colophony free, low-heat, uniform wax</li><li>Recommended for all skin types, <a href="#">Read More</a></li></ul>',
      selected: false
    },
    {
      image: 'assets/img/category-1.png',
      name: 'Battery Testing',
      price: '899 / Battery',
      content: '<ul><li class="">100% colophony free, low-heat, uniform wax</li><li>Recommended for all skin types, particularly </li><li>100% colophony free, low-heat, uniform wax</li><li>Recommended for all skin types, <a href="#">Read More</a></li></ul>',
      selected: false
    }
  ]

  cart: any[] = [];
  totalPrice: string = "";

  constructor(private cartService: CartService) {}

  selectCategory(event: any) {
    this.categories.forEach(category => category.selected = false);
    event.selected = !event.selected;
  }

  addToCart(service: any) {
    service.selected = true;
    this.cart.push(service);
    let totalPrice = this.cart.reduce((total, item) => total + parseFloat(item.price), 0);
    this.totalPrice = totalPrice;
    this.cartService.addToCart(service);

  }
  removeCart(service: any) {
    service.selected = false;
    this.cart = this.cart.filter(item => item.name != service.name);
    //this.cart.push(service);
  }
}
