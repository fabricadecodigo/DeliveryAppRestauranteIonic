import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardapioEditPage } from './cardapio-edit.page';

describe('CardapioEditPage', () => {
  let component: CardapioEditPage;
  let fixture: ComponentFixture<CardapioEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardapioEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
