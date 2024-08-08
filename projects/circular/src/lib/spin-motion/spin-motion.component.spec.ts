import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinMotionComponent } from './spin-motion.component';

describe('SpinMotionComponent', () => {
  let component: SpinMotionComponent;
  let fixture: ComponentFixture<SpinMotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinMotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
