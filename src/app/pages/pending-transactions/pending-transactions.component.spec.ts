import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTransactionsComponent } from './pending-transactions.component';

describe('PendingTransactionsComponent', () => {
  let component: PendingTransactionsComponent;
  let fixture: ComponentFixture<PendingTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingTransactionsComponent]
    });
    fixture = TestBed.createComponent(PendingTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
