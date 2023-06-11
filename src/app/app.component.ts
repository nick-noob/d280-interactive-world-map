import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interactive-world-map';

  selectedSvgId: string = "";
  selectedCapital: string = "";
  selectedRegion: string = "";
  selectedIncomeLevel: string = "";
  selectedLatitude: string = "";
  selectedLongitude: string = "";

onSvgIdSelected(svgId: string) {
  this.selectedSvgId = svgId;
}

onCapitalSelected(capital: string) {
  this.selectedCapital = capital;
}

onRegionSelected(region: string) {
  this.selectedRegion = region;
}

onIncomeSelected(income: string) {
  this.selectedIncomeLevel = income;
}

onLatitudeSelected(latitude: string) {
  this.selectedLatitude = latitude;
}

onLongitudeSelected(longitude: string) {
  this.selectedLongitude = longitude;
}

}


