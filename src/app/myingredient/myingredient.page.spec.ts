import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyingredientPage } from './myingredient.page';

describe('MyingredientPage', () => {
  let component: MyingredientPage;
  let fixture: ComponentFixture<MyingredientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyingredientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyingredientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
