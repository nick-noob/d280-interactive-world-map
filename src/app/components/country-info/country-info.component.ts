import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})

export class CountryInfoComponent implements OnInit {
  @Input() countryId!: string;
  @Input() countryCapital!: string;
  @Input() countryRegion!: string;
  @Input() countryIncomeLevel!: string;
  @Input() countryLatitude!: string;
  @Input() countryLongitude!: string;

  constructor() { }

  ngOnInit(): void { }

}
