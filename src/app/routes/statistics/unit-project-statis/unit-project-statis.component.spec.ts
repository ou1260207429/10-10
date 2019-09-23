import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticsUnitProjectStatisComponent } from './unit-project-statis.component';

describe('StatisticsUnitProjectStatisComponent', () => {
  let component: StatisticsUnitProjectStatisComponent;
  let fixture: ComponentFixture<StatisticsUnitProjectStatisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsUnitProjectStatisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsUnitProjectStatisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
