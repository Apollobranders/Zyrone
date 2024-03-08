import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-asset-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asset-card.component.html',
  styleUrl: './asset-card.component.scss'
})
export class AssetCardComponent {

  @Input() data: any;
}
