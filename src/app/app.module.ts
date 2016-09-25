import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UniversityItemComponent } from './university-item/university-item.component';

import { UniversityApiService } from '../api/university-api.service';
import { SearchformComponent } from './searchform/searchform.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UniversityItemComponent,
    SearchformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [UniversityApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
