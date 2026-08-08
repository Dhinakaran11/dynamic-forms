import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveforms } from './reactiveforms';

describe('Reactiveforms', () => {
  let component: Reactiveforms;
  let fixture: ComponentFixture<Reactiveforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactiveforms],
    }).compileComponents();

    fixture = TestBed.createComponent(Reactiveforms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
