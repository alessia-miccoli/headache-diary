import { Component, OnInit } from '@angular/core';
import { HEADACHES } from '../mock-headaches' 
import { Headache } from '../models/Headache';

@Component({
  selector: 'app-headaches',
  templateUrl: './headaches.component.html',
  styleUrls: ['./headaches.component.css']
})

export class HeadachesComponent implements OnInit {
  headaches = HEADACHES;
  selectedHeadache : Headache;
  openNew : boolean = false;

  constructor() { }

  onSelect(headache : Headache) : void {
    this.selectedHeadache = headache;
  }

  open( ){
    this.openNew = !this.openNew;
  }

  receiveEvent($event : boolean){
    this.openNew = $event;
  }
  
  ngOnInit() {
  }

}
