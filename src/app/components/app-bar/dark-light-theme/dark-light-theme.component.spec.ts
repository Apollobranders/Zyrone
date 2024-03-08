import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkLightThemeComponent } from './dark-light-theme.component';

describe('DarkLightThemeComponent', () => {
  let component: DarkLightThemeComponent;
  let fixture: ComponentFixture<DarkLightThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkLightThemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarkLightThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
