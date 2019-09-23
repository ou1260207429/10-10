import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsFireAcceptanceAssemblyComponent } from './fire-acceptance-assembly.component';

describe('DetailsFireAcceptanceAssemblyComponent', () => {
  let component: DetailsFireAcceptanceAssemblyComponent;
  let fixture: ComponentFixture<DetailsFireAcceptanceAssemblyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsFireAcceptanceAssemblyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFireAcceptanceAssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
