import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinessHoursListPage } from './business-hours-list.page';

describe('BusinessHoursListPage', () => {
  let component: BusinessHoursListPage;
  let fixture: ComponentFixture<BusinessHoursListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessHoursListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessHoursListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
