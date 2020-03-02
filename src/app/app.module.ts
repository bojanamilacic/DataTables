import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './countries/country-lista.component';
import { CountryDetailComponent } from './countries/country-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from './datatable/datatable.component';
import { FormsModule } from '@angular/forms';
import { DatatableListComponent } from './datatable/datatable-list/datatable-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatInputModule,} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDetailComponent,
    DatatableComponent,
    DatatableListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
