import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCreaditScoringToolComponent } from './insurance-creadit-scoring-tool.component';

describe('InsuranceCreaditScoringToolComponent', () => {
  let component: InsuranceCreaditScoringToolComponent;
  let fixture: ComponentFixture<InsuranceCreaditScoringToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceCreaditScoringToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceCreaditScoringToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
