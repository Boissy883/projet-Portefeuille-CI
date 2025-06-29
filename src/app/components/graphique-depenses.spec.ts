import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphiqueDepenses } from './graphique-depenses';

describe('GraphiqueDepenses', () => {
  let component: GraphiqueDepenses;
  let fixture: ComponentFixture<GraphiqueDepenses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphiqueDepenses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphiqueDepenses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
