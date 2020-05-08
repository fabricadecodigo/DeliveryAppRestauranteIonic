import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardapioListPage } from './cardapio-list.page';

describe('CardapioListPage', () => {
  let component: CardapioListPage;
  let fixture: ComponentFixture<CardapioListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardapioListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
