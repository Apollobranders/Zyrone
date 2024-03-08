import { Component } from '@angular/core';
import { AssetCardComponent } from '../asset-card/asset-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [
    RouterModule,
    AssetCardComponent
  ],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss'
})
export class CardViewComponent {
  data: any[] = [
    {name: 'Asset Name', type: 2, location: 'Ahmedabad, India', batteries: 27, date: '25/08/2023', time: '01:45 '},
    {name: 'Asset Name', type: 1, location: 'Ahmedabad, India', batteries: 27, date: '25/08/2023', time: '01:45 '},
    {name: 'Asset Name', type: 2, location: 'Ahmedabad, India', batteries: 27, date: '25/08/2023', time: '01:45 '},
    {name: 'Asset Name', type: 2, location: 'Ahmedabad, India', batteries: 27, date: '25/08/2023', time: '01:45 '},
    {name: 'Asset Name', type: 2, location: 'Ahmedabad, India', batteries: 27, date: '25/08/2023', time: '01:45 '},
    {name: 'Asset Name', type: 1, location: 'Ahmedabad, India', batteries: 27, date: '25/08/2023', time: '01:45 '},
    {name: 'Asset Name', type: 1, location: 'Ahmedabad, India', batteries: 27, date: '25/08/2023', time: '01:45 '},
    {name: 'Asset Name', type: 1, location: 'Ahmedabad, India', batteries: 27, date: '25/08/2023', time: '01:45 '},
  ];

  chunkArray(array: any[], size: number): any[][] {

    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }

}
