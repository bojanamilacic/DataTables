import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICountry } from '../ICountry';

@Injectable()
export class CountryService{
 
    constructor(private _http: HttpClient) {}

    getCountrues(): Observable<ICountry[]>{
       return(this._http.get<ICountry[]>('http://localhost/ExamplePHP/services/getCountries.php'));
    }
}