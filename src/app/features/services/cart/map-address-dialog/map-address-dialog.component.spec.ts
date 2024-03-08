import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAddressDialogComponent } from './map-address-dialog.component';

describe('MapAddressDialogComponent', () => {
  let component: MapAddressDialogComponent;
  let fixture: ComponentFixture<MapAddressDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapAddressDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapAddressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
