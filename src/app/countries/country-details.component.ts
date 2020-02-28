import { ICountry } from '../ICountry';
import { Component, Input } from '@angular/core';
@Component({
    selector:'country-details',
    templateUrl: './country-details.component.html'
})
export class CountryDetailComponent {
 @Input() country: ICountry;
 public _detailsVisible: boolean = false;
 
 toggleDetails(): void{
    this._detailsVisible = !this._detailsVisible;
    }
}