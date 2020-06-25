import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../categories/shared/category.service';
import { ToastService } from './../../core/services/toast.service';
import { CardapioService } from './../shared/cardapio.service';

@Component({
  selector: 'app-cardapio-edit',
  templateUrl: './cardapio-edit.page.html',
  styleUrls: ['./cardapio-edit.page.scss'],
})
export class CardapioEditPage implements OnInit {
  title = 'Novo produto';

  cardapioModel: ICardapioModel = {
    category: '',
    name: '',
    price: null,
    description: ''
  };

  id: string;

  cartegories: ICategoryResponse[] = [];

  constructor(
    private toast: ToastService,
    private cardapioService: CardapioService,
    private categoryService: CategoryService,
    private location: Location,
    private activedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    await this.loadCategories();
    this.id = this.activedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.loadCardapio(this.id);
    }
  }

  async loadCategories() {
    this.cartegories = await this.categoryService.getAll();
  }

  async loadCardapio(id: string) {
    try {
      const cardapio = await this.cardapioService.getById(id);
      this.cardapioModel = {
        category: cardapio.category,
        name: cardapio.name,
        price: cardapio.price,
        description: cardapio.description
      };
    } catch (error) {
      console.error(error);
      this.toast.showError('Ocorreu algum erro ao tentar recuperar o produdo.');
    }
  }

  async onSubmit() {
    try {
      // chamar a api
      let result: ICardapioResponse;
      if (this.id) {
        result = await this.cardapioService.update(this.id, this.cardapioModel);
      } else {
        result = await this.cardapioService.insert(this.cardapioModel);
      }

      if (result) {
        console.log(result);
        this.toast.showSuccess('Produto cadastrado com sucesso');
        this.location.back();
      }
    } catch (error) {
      this.toast.showError('Erro ao cadastrar o produto');
    }
  }
}
