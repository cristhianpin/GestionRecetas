import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRecetasComponent } from './vista-recetas.component';

describe('VistaRecetasComponent', () => {
  let component: VistaRecetasComponent;
  let fixture: ComponentFixture<VistaRecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaRecetasComponent]
    });
    fixture = TestBed.createComponent(VistaRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
