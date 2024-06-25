import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintarifComponent } from './admintarif.component';

describe('AdmintarifComponent', () => {
  let component: AdmintarifComponent;
  let fixture: ComponentFixture<AdmintarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintarifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
