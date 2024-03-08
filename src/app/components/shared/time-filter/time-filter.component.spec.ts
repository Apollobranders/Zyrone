import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFilterComponent } from './time-filter.component';

describe('TimeFilterComponent', () => {
  let component: TimeFilterComponent;
  let fixture: ComponentFixture<TimeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
