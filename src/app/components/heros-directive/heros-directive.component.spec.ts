import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosDirectiveComponent } from './heros-directive.component';

describe('HerosDirectiveComponent', () => {
  let component: HerosDirectiveComponent;
  let fixture: ComponentFixture<HerosDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerosDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
