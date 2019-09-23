import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticsWeeklyStatisticsComponent } from './weekly-statistics.component';

describe('StatisticsWeeklyStatisticsComponent', () => {
  let component: StatisticsWeeklyStatisticsComponent;
  let fixture: ComponentFixture<StatisticsWeeklyStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsWeeklyStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsWeeklyStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
