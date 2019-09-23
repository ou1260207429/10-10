import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrintPagesCompletedAcceptancePrintComponent } from './completed-acceptance-print.component';

describe('PrintPagesCompletedAcceptancePrintComponent', () => {
  let component: PrintPagesCompletedAcceptancePrintComponent;
  let fixture: ComponentFixture<PrintPagesCompletedAcceptancePrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPagesCompletedAcceptancePrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPagesCompletedAcceptancePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
