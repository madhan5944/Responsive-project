import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingBoxComponent } from './moving-box.component';

describe('MovingBoxComponent', () => {
  let component: MovingBoxComponent;
  let fixture: ComponentFixture<MovingBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovingBoxComponent]
    });
    fixture = TestBed.createComponent(MovingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
