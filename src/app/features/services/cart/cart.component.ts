import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Router, RouterLink } from '@angular/router';
import { EmptyDataComponent } from '../../../components/empty-data/empty-data.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { DialogComponent } from '../../../components/dialog/dialog.component';
import { EventsService } from '../../../services/events.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MapAddressDialogComponent } from './map-address-dialog/map-address-dialog.component';

export interface Cart {
  name: string,
  price: string
}
export interface BookingForm {
  contact_number: string,
  slot_date: string,
  slot_time: string,
  address: string,
  cart_items: Cart[]
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    EmptyDataComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart: any[] = [];
  totalPrice: string = "";

  bookingForm: FormGroup;

  constructor(
    private cartService: CartService,
    private eventService: EventsService,
    public dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder
    ) {
      this.bookingForm = this.fb.group({
        contact_number: ['', [Validators.required, Validators.minLength(10)]],
        slot_date: ['', Validators.required],
        slot_time: ['', Validators.required],
        address: ['', Validators.required],
        cart_items: ['', Validators.required]
      });
    }

  ngOnInit() {
    this.cart = this.cartService.getItems();
    this.bookingForm.controls['cart_items'].setValue(this.cart);
    this.eventService.on('SubmitCart').subscribe(data => {
      this.bookingForm.markAllAsTouched();
      debugger
      if(this.bookingForm.valid) {
        this.openSuccessDialog();
      }
    });
  }

  allowOnlynumber(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);
    const pattern = /[0-9]/;

    if (!pattern.test(inputChar)) {
      // Stop the character from being entered into the input
      event.preventDefault();
    }
  }

  openSuccessDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        icon: 'isax-tick-circle',
        name: 'Service Booked Successfully!',
        description: 'You can check details on<br>Service Page.',
        buttonText: 'Ok, Go to Service'
      },
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result.ok) {
        this.router.navigate(['/services'])
      }

    });
  }

  selectLocationDialog(): void {
    const dialogRef = this.dialog.open(MapAddressDialogComponent, {
      // data: {
      //   icon: 'isax-tick-circle',
      //   name: 'Service Booked Successfully!',
      //   description: 'You can check details on<br>Service Page.',
      //   buttonText: 'Ok, Go to Service'
      // },
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result.ok) {
        this.router.navigate(['/services'])
      }

    });
  }

}
