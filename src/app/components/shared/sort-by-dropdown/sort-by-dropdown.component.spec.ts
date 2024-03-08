import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByDropdownComponent } from './sort-by-dropdown.component';

describe('SortByDropdownComponent', () => {
  let component: SortByDropdownComponent;
  let fixture: ComponentFixture<SortByDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortByDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortByDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
