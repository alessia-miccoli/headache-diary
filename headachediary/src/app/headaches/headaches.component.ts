import { Component, OnInit } from '@angular/core';
import { HEADACHES } from '../mock-headaches' 
import { from } from 'rxjs';
import { Headache } from '../models/Headache';

@Component({
  selector: 'app-headaches',
  templateUrl: './headaches.component.html',
  styleUrls: ['./headaches.component.css']
})

export class HeadachesComponent implements OnInit {
  headaches = HEADACHES;
  selectedHeadache : Headache;

  constructor() { }

  onSelect(headache : Headache) : void {
    this.selectedHeadache = headache;
  }
  
  ngOnInit() {
  }

}
