import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsCompletedAcceptanceAssemblyComponent } from './completed-acceptance-assembly.component';

describe('DetailsCompletedAcceptanceAssemblyComponent', () => {
  let component: DetailsCompletedAcceptanceAssemblyComponent;
  let fixture: ComponentFixture<DetailsCompletedAcceptanceAssemblyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCompletedAcceptanceAssemblyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCompletedAcceptanceAssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
