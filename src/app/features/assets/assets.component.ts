import { Component } from '@angular/core';
import { MapViewComponent } from './map-view/map-view.component';
import { CardViewComponent } from './card-view/card-view.component';

@Component({
  selector: 'app-assets',
  standalone: true,
  imports: [
    MapViewComponent,
    CardViewComponent
  ],
  templateUrl: './assets.component.html',
  styleUrl: './assets.component.scss'
})
export class AssetsComponent {

}
