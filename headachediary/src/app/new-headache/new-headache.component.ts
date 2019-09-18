import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TYPE } from '../mock-headaches'

@Component({
  selector: 'app-new-headache',
  templateUrl: './new-headache.component.html',
  styleUrls: ['./new-headache.component.css']
})

export class NewHeadacheComponent implements OnInit {
  @Input() openNew : boolean;
  @Output() closeEvent = new EventEmitter<boolean>();
  
  open : boolean = false;
  newType : string;
  newStartDate : string;
  newEndDate: string;
  newDidTakeMedicine : boolean;

  type = TYPE;

  closeNewHeadache(){
    this.closeEvent.emit(this.open);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
