import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsFireDesignDeclareAssemblyComponent } from './fire-design-declare-assembly.component';

describe('DetailsFireDesignDeclareAssemblyComponent', () => {
  let component: DetailsFireDesignDeclareAssemblyComponent;
  let fixture: ComponentFixture<DetailsFireDesignDeclareAssemblyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsFireDesignDeclareAssemblyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFireDesignDeclareAssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
