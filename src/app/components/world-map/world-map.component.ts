import { Component, ElementRef, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { CountryInfoComponent } from '../country-info/country-info.component';
import { WorldbankApiService } from '../../worldbank-api.service';


@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})

export class WorldMapComponent {


  constructor(
    private elementRef: ElementRef, 
    private worldApiService: WorldbankApiService
    ) { }

  ngAfterViewInit() {
    const svgElement = this.elementRef.nativeElement.querySelector("svg");
    const pathElements = svgElement.querySelectorAll("path");
    pathElements.forEach((path: SVGPathElement) => {

      path.addEventListener("click", this.handleClick.bind(this));
      });
    }

@Output() svgIdSelected = new EventEmitter<string>();
@Output() capitalSelected = new EventEmitter<string>();
@Output() regionSelected = new EventEmitter<string>();
@Output() incomeLevelSelected = new EventEmitter<string>();
@Output() latitudeSelected = new EventEmitter<string>();
@Output() longitudeSelected = new EventEmitter<string>();

@ViewChild(CountryInfoComponent) 

private countryInfoComponent!: CountryInfoComponent;

handleClick(event: MouseEvent) {
  const path = event.target as SVGPathElement;
  const countryId = path.id;


  this.worldApiService.getCountryData(countryId).subscribe((data: any) => {
    const name = data[1][0].name;
    const capitalCity = data[1][0].capitalCity;
    const region = data[1][0].region.value;
    const income = data[1][0].incomeLevel.value;
    const latitude = data[1][0].latitude;
    const longitude = data[1][0].longitude;

    this.svgIdSelected.emit(name);
    this.capitalSelected.emit(capitalCity);
    this.regionSelected.emit(region);
    this.incomeLevelSelected.emit(income);
    this.latitudeSelected.emit(latitude);
    this.longitudeSelected.emit(longitude);
  });
}
}
