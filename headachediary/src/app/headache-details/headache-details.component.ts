import { Component, OnInit, Input } from '@angular/core';
import { Headache } from '../models/Headache';
import { TYPE } from '../mock-headaches'

@Component({
  selector: 'app-headache-details',
  templateUrl: './headache-details.component.html',
  styleUrls: ['./headache-details.component.css']
})

export class HeadacheDetailsComponent implements OnInit {
  @Input() headache: Headache;

  type = TYPE;

  selectedValue : string = "";
 
  constructor() { }
  
  ngOnInit() {
  }

}
