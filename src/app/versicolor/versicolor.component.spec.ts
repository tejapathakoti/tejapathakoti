import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersicolorComponent } from './versicolor.component';

describe('VersicolorComponent', () => {
  let component: VersicolorComponent;
  let fixture: ComponentFixture<VersicolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersicolorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersicolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
