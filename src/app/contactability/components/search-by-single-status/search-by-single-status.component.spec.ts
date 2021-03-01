import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBySingleStatusComponent } from './search-by-single-status.component';

describe('SearchBySingleStatusComponent', () => {
  let component: SearchBySingleStatusComponent;
  let fixture: ComponentFixture<SearchBySingleStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBySingleStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBySingleStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
