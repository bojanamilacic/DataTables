import { Component, OnInit, Input } from '@angular/core';
import { CountryModel } from 'src/app/models/country.model';
@Component({
  selector: 'app-datatable-list',
  templateUrl: './datatable-list.component.html',
  styleUrls: ['./datatable-list.component.css']
})
export class DatatableListComponent implements OnInit {
  @Input() country: CountryModel;
  constructor() { }

  ngOnInit(): void {
  }

}