import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseingredientPage } from './parseingredient.page';

describe('ParseingredientPage', () => {
  let component: ParseingredientPage;
  let fixture: ComponentFixture<ParseingredientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParseingredientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParseingredientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
