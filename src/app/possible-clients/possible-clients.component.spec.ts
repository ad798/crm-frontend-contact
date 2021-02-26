import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleClientsComponent } from './possible-clients.component';

describe('PossibleClientsComponent', () => {
  let component: PossibleClientsComponent;
  let fixture: ComponentFixture<PossibleClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossibleClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibleClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
