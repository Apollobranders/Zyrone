import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-data',
  standalone: true,
  imports: [],
  templateUrl: './empty-data.component.html',
  styleUrl: './empty-data.component.scss'
})
export class EmptyDataComponent {
  @Input() icon: string = "";
  @Input() name: string = "";
  @Input() description: string = "";
}
