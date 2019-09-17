import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadacheDetailsComponent } from './headache-details.component';

describe('HeadacheDetailsComponent', () => {
  let component: HeadacheDetailsComponent;
  let fixture: ComponentFixture<HeadacheDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadacheDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadacheDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
