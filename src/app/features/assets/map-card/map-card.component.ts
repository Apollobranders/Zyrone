import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet-boundary-canvas';

const leaftletPoints = [
  {
    lat: 21.1702,
    long: 72.8311,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: 'Surat, India',
    type: 2
  },
  {
    lat: 19.2183,
    long: 72.9781,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: 'Thane, India',
    type: 1
  },
  {
    lat: 12.9716,
    long: 77.5946,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: 'Bangalore',
    type: 2
  },
  {
    lat: 20.2961,
    long: 85.8245,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: 'Bhubaneswar',
    type: 2
  },
  {
    lat: 21.1458,
    long: 79.0882,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: 'Nagpur ',
    type: 1
  },
  {
    lat: 28.7041,
    long: 77.1025,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: 'Delhi',
    type: 1
  }
];
@Component({
  selector: 'app-map-card',
  standalone: true,
  imports: [],
  templateUrl: './map-card.component.html',
  styleUrl: './map-card.component.scss'
})
export class MapCardComponent implements AfterViewInit {
  private map: any;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {

    this.map = L.map('map', {
      center: L.latLng(20.5937, 78.9629),
      zoom: 4,
    });

    var geojsonFeature: any = {
      "type": "Feature",
      "properties": {
          "name": "Coors Field",
          "amenity": "Baseball Stadium",
          "popupContent": "This is where the Rockies play!"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [20.5937, 78.9629]
      }
  };
    const tileLayerTheme =
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

    var tiles = new L.TileLayer.BoundaryCanvas(tileLayerTheme, {
      maxZoom: 6,
      minZoom: 5,
      attribution: undefined
    });
    var myLayer = L.geoJSON(geojsonFeature);
    // const tiles = L.tileLayer.(tileLayerTheme, {
    //   maxZoom: 18,
    //   minZoom: 3,
    //   attribution: undefined
    // });

    this.map.addLayer(myLayer);
    this.map.addLayer(tiles);

    const mcg = L.markerClusterGroup({
      chunkedLoading: false,
      spiderfyOnMaxZoom: false
    });

    leaftletPoints.map(point => {
      const { name, location, type } = point;
      // const icon = L.icon({
      //   iconUrl: ``
      // });
      const iconColor = type == 1?'#13DEB9':'#FF8C1A'

      const markerHtmlStyles = `
        background-color: ${iconColor};
        width: 20px;
        height: 20px;
        display: block;
        left: -1.5rem;
        top: -1.5rem;
        position: relative;
        border-radius: 50%;
        border: 1px solid #FFFFFF`
      const icon = L.divIcon({
        className: "my-custom-pin",
        iconAnchor: [0, 24],
        //labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: `<span style="${markerHtmlStyles}" />`
      });
      const marker = L.marker([point.lat, point.long], {
        icon
      });
      const popupContent = `
      <p class="m-0 text-body-quaternary">${location}</p>
    `;
      const popup = L.popup({ minWidth: 91, closeButton: false }).setContent(popupContent);

      marker.bindPopup(popup);
      mcg.addLayer(marker);

      return true;
    });

    this.map.addLayer(mcg);

  }
}
