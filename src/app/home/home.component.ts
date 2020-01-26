import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latitude = 40.552780;
  longitude = -111.901225;
  markers = [{ lat: 40.552780, lng: -111.901225, alpha: 1 }];

  addMarker(lat: number, lng: number) {
    this.markers.push({ lat, lng, alpha: 0.4 });
  }
  
  ngOnInit() {
  }

}
