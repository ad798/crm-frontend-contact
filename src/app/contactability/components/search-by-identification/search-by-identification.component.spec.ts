import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SearchByIdentificationComponent } from './search-by-identification.component';

describe('SearchByIdentificationComponent', () => {
  let component: SearchByIdentificationComponent;
  let fixture: ComponentFixture<SearchByIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByIdentificationComponent ],
      imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatRippleModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
