import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactabilityComponent } from './contactability.component';

describe('ContactabilityComponent', () => {
  let component: ContactabilityComponent;
  let fixture: ComponentFixture<ContactabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
