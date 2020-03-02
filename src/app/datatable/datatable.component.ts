import { Component, OnInit } from '@angular/core';
import { CountryModel } from '../models/country.model';
import { FormControl } from '@angular/forms';
import { CountryService } from '../countries/country.service';
import { HttpClient } from '@angular/common/http';
import { CountriesService } from '../service/countries.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  countries: any;
  // searchText;
  // page = 1;
  // pageSize = 4;
  // collectionSize = COUNTRIES.length;
  // get countries(): CountryModel[]{
  //   return COUNTRIES
  //   .map((country, i) => ({id: i + 1, ...country})) //dodjeljuje id, ...country vjerovatno znaci da prelazi na naredni elemenat
  //     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);//odredjuje koliko ce se elemenata prikazati u tabeli
  // }
  constructor( public service: CountriesService, private httpClient: HttpClient) { }
  ngOnInit(): void {
    
   this.service.getCountries().subscribe(data => {
    this.countries = data as CountryModel[];
    console.log("countries",this.countries);
  });
  }
  // getCountryDetail(){
  //   this.service.getCountries().subscribe(data => {
  //     this.countries = data;
  //     console.log("countries",this.countries);
  //   })
 

// const COUNTRIES: CountryModel[] = [
//   {
//     name: 'Russia',
//     population: 146989754
//   },
//   {
//     name: 'France',
//     population: 64979548
//   },
//   {
//     name: 'Germany',
//     population: 82114224
//   },
//   {
//     name: 'Portugal',
//     population: 10329506
//   },
//   {
//     name: 'Canada',
//     population: 36624199
//   },
//   {
//     name: 'Vietnam',
//     population: 95540800
//   },
//   {
//     name: 'Brazil',
//     population: 209288278
//   },
//   {
//     name: 'Mexico',
//     population: 129163276
//   },
//   {
//     name: 'United States',
//     population: 324459463
//   },
//   {
//     name: 'India',
//     population: 1324171354
//   },
//   {
//     name: 'Indonesia',
//     population: 263991379
//   },
//   {
//     name: 'Tuvalu',
//     population: 11097
//   },
//   {
//     name: 'China',
//     population: 1409517397
//   }
// ]
}
