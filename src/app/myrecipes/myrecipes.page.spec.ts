import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrecipesPage } from './myrecipes.page';

describe('MyrecipesPage', () => {
  let component: MyrecipesPage;
  let fixture: ComponentFixture<MyrecipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrecipesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
