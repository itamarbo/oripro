import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductnotreallyComponent } from './addproductnotreally.component';

describe('AddproductnotreallyComponent', () => {
  let component: AddproductnotreallyComponent;
  let fixture: ComponentFixture<AddproductnotreallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproductnotreallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductnotreallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
