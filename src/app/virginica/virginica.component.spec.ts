import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirginicaComponent } from './virginica.component';

describe('VirginicaComponent', () => {
  let component: VirginicaComponent;
  let fixture: ComponentFixture<VirginicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirginicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirginicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
