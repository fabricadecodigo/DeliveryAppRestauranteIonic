import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryEditPage } from './category-edit.page';

describe('CategoryEditPage', () => {
  let component: CategoryEditPage;
  let fixture: ComponentFixture<CategoryEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
