import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTransactions } from './resume-transactions';

describe('ResumeTransactions', () => {
  let component: ResumeTransactions;
  let fixture: ComponentFixture<ResumeTransactions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTransactions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTransactions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
