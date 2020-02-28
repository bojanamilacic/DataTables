import { Component } from '@angular/core';
import { ICountry } from '../ICountry';

@Component({
    selector:'country-list',
    templateUrl: './country-list.component.html'
})

export class CountryListComponent {
  
  public _countries: ICountry[] = COUNTRIES;
  public _currentCountry: ICountry;
  }
  
  const COUNTRIES: ICountry[] = [
    {
      name: "United States", code: "us", states: [
        { name: "Nevada" }, { name: "Colorado" }]
    },
  
    {
      name: "Germany", code: "de", states: [
        { name: "Bavaria" }]
    },
    {
      name: "Luxembourg", code: "lu", states: []
    }
  ];