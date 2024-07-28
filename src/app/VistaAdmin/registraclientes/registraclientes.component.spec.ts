import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraclientesComponent } from './registraclientes.component';

describe('RegistraclientesComponent', () => {
  let component: RegistraclientesComponent;
  let fixture: ComponentFixture<RegistraclientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistraclientesComponent]
    });
    fixture = TestBed.createComponent(RegistraclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
