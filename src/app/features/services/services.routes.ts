import { Routes } from '@angular/router';
import { BookServiceComponent } from './book-service/book-service.component';
import { ServicesComponent } from './services.component';
import { CartComponent } from './cart/cart.component';


export const services: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: '', component: ServicesComponent },
  { path: 'book-service', component: BookServiceComponent },
  { path: 'cart', component: CartComponent },

];

