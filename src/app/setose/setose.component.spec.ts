import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetoseComponent } from './setose.component';

describe('SetoseComponent', () => {
  let component: SetoseComponent;
  let fixture: ComponentFixture<SetoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
