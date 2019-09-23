import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrintPagesAcceptanceManagementPrintComponent } from './acceptance-management-print.component';

describe('PrintPagesAcceptanceManagementPrintComponent', () => {
  let component: PrintPagesAcceptanceManagementPrintComponent;
  let fixture: ComponentFixture<PrintPagesAcceptanceManagementPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPagesAcceptanceManagementPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPagesAcceptanceManagementPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
