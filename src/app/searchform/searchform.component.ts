import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { UniversityApiService } from '../../api/university-api.service';
import { University } from '../../model/model.university';
import { ISearchItem } from '../../model/ISearchItem';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;
  public event: any[] = [];
  @Input() universities: University[];
  @Output() listChange: EventEmitter<University[]> = new EventEmitter<University[]>();


  constructor(
    private _fb: FormBuilder,
    private _universityApiService: UniversityApiService
  ) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: new FormControl(''),
      country: new FormControl('')
      // country: new FormControl('', [<any>Validators.required, <any>Validators.minLength(3)])
    });

  }

  search(model: ISearchItem, isValid: boolean) {
    console.log(model.name + ' ' + model.country, isValid);
    console.log(this.universities.length);

    // => TODO: Koleksiyonların instance'ı alındığında 2 way binding'e yeniden subscribe olmak lazım WPF'teki gibi. Bu nedenle şimdili Pop, push yapıldı.
    while (this.universities.length) {
      this.universities.pop();
    }

    this._universityApiService.getUniversityByFilter(model.name, model.country)
      .subscribe(k => k.forEach(y => {
        this.universities.push(y);
      }),
      err => {
        console.log(err);
      });
    this.listChange.emit(this.universities);
    this.submitted = true;
    return false;

  };


}
