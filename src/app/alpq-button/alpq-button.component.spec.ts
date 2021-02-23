import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpqButtonComponent } from './alpq-button.component';

describe('AlpqButtonComponent', () => {
  let component: AlpqButtonComponent;
  let fixture: ComponentFixture<AlpqButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlpqButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpqButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
