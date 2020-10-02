import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopregistryComponent } from './popregistry.component';

describe('PopregistryComponent', () => {
  let component: PopregistryComponent;
  let fixture: ComponentFixture<PopregistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopregistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopregistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
