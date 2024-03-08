import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDoughnutChartComponent } from './multi-doughnut-chart.component';

describe('MultiDoughnutChartComponent', () => {
  let component: MultiDoughnutChartComponent;
  let fixture: ComponentFixture<MultiDoughnutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiDoughnutChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
