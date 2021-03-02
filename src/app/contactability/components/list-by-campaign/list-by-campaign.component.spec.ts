import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListByCampaignComponent } from './list-by-campaign.component';

describe('ListByCampaignComponent', () => {
  let component: ListByCampaignComponent;
  let fixture: ComponentFixture<ListByCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListByCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListByCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
