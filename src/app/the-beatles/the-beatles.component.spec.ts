import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBeatlesComponent } from './the-beatles.component';

describe('TheBeatlesComponent', () => {
  let component: TheBeatlesComponent;
  let fixture: ComponentFixture<TheBeatlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBeatlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBeatlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
