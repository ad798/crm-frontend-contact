import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByVariousStatusComponent } from './search-by-various-status.component';

describe('SearchByVariousStatusComponent', () => {
  let component: SearchByVariousStatusComponent;
  let fixture: ComponentFixture<SearchByVariousStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByVariousStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByVariousStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
