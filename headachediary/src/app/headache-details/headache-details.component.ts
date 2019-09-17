import { Component, OnInit, Input } from '@angular/core';
import { Headache } from '../models/Headache';

@Component({
  selector: 'app-headache-details',
  templateUrl: './headache-details.component.html',
  styleUrls: ['./headache-details.component.css']
})
export class HeadacheDetailsComponent implements OnInit {
  @Input() headache: Headache;

  type = [
    {id: 1, name: "Strong"},
    {id: 2, name: "Medium"},
    {id: 3, name: "Light"}
  ];

 selectedValue : string = "";
 
  constructor() { }
  
  ngOnInit() {
  }

}
