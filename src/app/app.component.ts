import { Component, ViewEncapsulation } from '@angular/core';
import { University } from '../model/model.university';
import { UniversityApiService } from '../api/university-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'University Domains and Names Data';
  public universities: University[]; // Local properties 
  counter: number;
  constructor(
    private _universityApiService: UniversityApiService
  ) {
    this.loadUniversities();
  }


  loadUniversities() {
    this._universityApiService.getUniversity()
      .subscribe(k => {
        this.universities = k;
        this.counter = this.universities.length;
      },
      err => {
        console.log(err);
      });

  }


}
