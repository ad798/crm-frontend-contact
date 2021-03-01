import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByNameSurnameComponent } from './search-by-name-surname.component';

describe('SearchByNameSurnameComponent', () => {
  let component: SearchByNameSurnameComponent;
  let fixture: ComponentFixture<SearchByNameSurnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByNameSurnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByNameSurnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
