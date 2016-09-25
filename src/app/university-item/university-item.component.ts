import { Component, OnInit, Input} from '@angular/core';

import { University } from '../../model/model.university';
import { UniversityApiService } from '../../api/university-api.service';


@Component({
  selector: 'app-university-item',
  templateUrl: './university-item.component.html',
  styleUrls: ['./university-item.component.css'],
})
export class UniversityItemComponent implements OnInit {
  @Input() universities: University[];

  constructor(
    private _universityApiService: UniversityApiService
    ) { }


  ngOnInit() {
  }

}
