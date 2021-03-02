import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByCampaignIdClientIdComponent } from './search-by-campaign-id-client-id.component';

describe('SearchByCampaignIdClientIdComponent', () => {
  let component: SearchByCampaignIdClientIdComponent;
  let fixture: ComponentFixture<SearchByCampaignIdClientIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByCampaignIdClientIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByCampaignIdClientIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
