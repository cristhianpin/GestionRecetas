import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRecetasComponent } from './menu-recetas.component';

describe('MenuRecetasComponent', () => {
  let component: MenuRecetasComponent;
  let fixture: ComponentFixture<MenuRecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuRecetasComponent]
    });
    fixture = TestBed.createComponent(MenuRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
