import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceActivityComponent } from './maintenance-activity.component';

describe('MaintenanceActivityComponent', () => {
  let component: MaintenanceActivityComponent;
  let fixture: ComponentFixture<MaintenanceActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaintenanceActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
