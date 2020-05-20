import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinessHoursEditPage } from './business-hours-edit.page';

describe('BusinessHoursEditPage', () => {
  let component: BusinessHoursEditPage;
  let fixture: ComponentFixture<BusinessHoursEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessHoursEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessHoursEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
