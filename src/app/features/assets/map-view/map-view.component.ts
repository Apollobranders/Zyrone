import { AfterViewInit, Component } from '@angular/core';
import { MapCardComponent } from '../map-card/map-card.component';
import { AssetCardComponent } from '../asset-card/asset-card.component';


@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [
    MapCardComponent,
    AssetCardComponent
  ],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.scss'
})
export class MapViewComponent {

  data: any[] = [
    {name: 'Asset Name', type: 2, location: 'Ahmedabad, India', batteries: 27, date: '25/08/2023', time: '01:45 '},
    {name: 'Asset Name', type: 1, location: 'Ahmedabad, India', batteries: 27, date: '25/08/2023', time: '01:45 '},
    {name: 'Asset Name', type: 2, location: 'Ahmedabad, India', batteries: 27, date: '25/08/2023', time: '01:45 '},
    {name: 'Asset Name', type: 2, location: 'Ahmedabad, India', batteries: 27, date: '25/08/2023', time: '01:45 '},
    {name: 'Asset Name', type: 2, location: 'Ahmedabad, India', batteries: 27, date: '25/08/2023', time: '01:45 '},
    {name: 'Asset Name', type: 1, location: 'Ahmedabad, India', batteries: 27, date: '25/08/2023', time: '01:45 '},
    {name: 'Asset Name', type: 1, location: 'Ahmedabad, India', batteries: 27, date: '25/08/2023', time: '01:45 '},
    {name: 'Asset Name', type: 1, location: 'Ahmedabad, India', batteries: 27, date: '25/08/2023', time: '01:45 '},
  ]

}
