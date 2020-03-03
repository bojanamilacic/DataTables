import { Component, OnInit, PipeTransform } from '@angular/core';
import { CountryModel } from '../models/country.model';
import { HttpClient } from '@angular/common/http';
import { CountriesService } from '../service/countries.service';
;
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  countries: CountryModel[];
  searchText;
  page = 1;
  pageSize = 4;
  collectionSize: any;
  
  constructor(public service: CountriesService, private httpClient: HttpClient) { }
  ngOnInit() {
   this.getCountryDetails();
  }
  getCountryDetails() {
    return this.service.getCountries()
    .subscribe(data => {
     this.countries = data
        .map((country, i) => ({ id: i + 1, ...country })) as CountryModel[]
      console.log("countries", this.countries);
      this.collectionSize = this.countries.length
      console.log("length ", this.collectionSize)
     
    });
  }
  searchItems(text: string, pipe:PipeTransform){

  }
}
