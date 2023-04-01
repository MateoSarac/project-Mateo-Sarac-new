import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesActorsComponent } from './movies-actors.component';

describe('MoviesActorsComponent', () => {
  let component: MoviesActorsComponent;
  let fixture: ComponentFixture<MoviesActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesActorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
