import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHeadacheComponent } from './new-headache.component';

describe('NewHeadacheComponent', () => {
  let component: NewHeadacheComponent;
  let fixture: ComponentFixture<NewHeadacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHeadacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHeadacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
