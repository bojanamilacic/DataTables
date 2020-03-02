import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryModel } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  url = "./assets/Countries.json";
  countries: CountryModel
  constructor(private http: HttpClient) {
  }

  public getCountries(): Observable<any> {
    return this.http.get(this.url);
  }

}

