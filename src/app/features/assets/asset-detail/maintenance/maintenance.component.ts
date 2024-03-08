import { Component } from '@angular/core';
import { CalenderViewComponent } from './calender-view/calender-view.component';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [
    CalenderViewComponent
  ],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent {

}
