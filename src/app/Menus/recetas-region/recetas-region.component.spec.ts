import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasRegionComponent } from './recetas-region.component';

describe('RecetasRegionComponent', () => {
  let component: RecetasRegionComponent;
  let fixture: ComponentFixture<RecetasRegionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecetasRegionComponent]
    });
    fixture = TestBed.createComponent(RecetasRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
