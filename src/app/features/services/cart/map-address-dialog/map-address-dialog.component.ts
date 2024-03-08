import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../../../models/dialog';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-address-dialog',
  standalone: true,
  imports: [],
  templateUrl: './map-address-dialog.component.html',
  styleUrl: './map-address-dialog.component.scss'
})
export class MapAddressDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MapAddressDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInt() {
    var map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var marker = L.marker([51.5, -0.09], { draggable: true }).addTo(map);

        marker.on('dragend', function(event){
            var marker = event.target;
            var position = marker.getLatLng();
            console.log(position);
        });
  }
}
