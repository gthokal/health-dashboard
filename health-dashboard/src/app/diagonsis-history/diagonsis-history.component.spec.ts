import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagonsisHistoryComponent } from './diagonsis-history.component';

describe('DiagonsisHistoryComponent', () => {
  let component: DiagonsisHistoryComponent;
  let fixture: ComponentFixture<DiagonsisHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagonsisHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagonsisHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
