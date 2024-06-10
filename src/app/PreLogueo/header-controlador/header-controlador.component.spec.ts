import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderControladorComponent } from './header-controlador.component';

describe('HeaderControladorComponent', () => {
  let component: HeaderControladorComponent;
  let fixture: ComponentFixture<HeaderControladorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderControladorComponent]
    });
    fixture = TestBed.createComponent(HeaderControladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
