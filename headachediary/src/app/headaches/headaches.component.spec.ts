import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadachesComponent } from './headaches.component';

describe('HeadachesComponent', () => {
  let component: HeadachesComponent;
  let fixture: ComponentFixture<HeadachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
