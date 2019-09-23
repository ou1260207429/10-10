import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrintPagesFiewDesignDeclarePrintComponent } from './fiew-design-declare-print.component';

describe('PrintPagesFiewDesignDeclarePrintComponent', () => {
  let component: PrintPagesFiewDesignDeclarePrintComponent;
  let fixture: ComponentFixture<PrintPagesFiewDesignDeclarePrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPagesFiewDesignDeclarePrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPagesFiewDesignDeclarePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
