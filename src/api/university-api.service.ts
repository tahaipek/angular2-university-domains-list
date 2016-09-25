import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { University } from '../model/model.university';

@Injectable()
export class UniversityApiService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://universities.hipolabs.com/search';
  }

  getUniversity(): Observable<University[]> {
    return this.http.get(`${this.baseUrl}?`).map(response => response.json());
  }

  getUniversityByFilter(name: string, country: string): Observable<University[]> {
    let url = this.baseUrl + '?';
    if (name) {
      url +=  'name=' + name + '&';
    }

    if (country) {
      url += 'country=' + country;
    }
    console.log(url);
    return this.http.get(url).map(response => response.json());
  }

}
