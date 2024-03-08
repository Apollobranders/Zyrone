import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDigitalTwinComponent } from './bank-digital-twin.component';

describe('BankDigitalTwinComponent', () => {
  let component: BankDigitalTwinComponent;
  let fixture: ComponentFixture<BankDigitalTwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankDigitalTwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankDigitalTwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
