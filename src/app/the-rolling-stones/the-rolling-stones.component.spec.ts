import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRollingStonesComponent } from './the-rolling-stones.component';

describe('TheRollingStonesComponent', () => {
  let component: TheRollingStonesComponent;
  let fixture: ComponentFixture<TheRollingStonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheRollingStonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheRollingStonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
