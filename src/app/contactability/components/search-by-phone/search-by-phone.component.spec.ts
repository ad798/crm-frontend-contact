import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByPhoneComponent } from './search-by-phone.component';

describe('SearchByPhoneComponent', () => {
  let component: SearchByPhoneComponent;
  let fixture: ComponentFixture<SearchByPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
