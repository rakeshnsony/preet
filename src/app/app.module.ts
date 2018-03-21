import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PatientComponent } from './patient/patient.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './list/search/search.component';
import { RecordsComponent } from './list/records/records.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PatientComponent,
    ListComponent,
    SearchComponent,
    RecordsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
