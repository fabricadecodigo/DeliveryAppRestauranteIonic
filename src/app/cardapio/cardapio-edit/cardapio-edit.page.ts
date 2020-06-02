import { ToastService } from './../../core/services/toast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio-edit',
  templateUrl: './cardapio-edit.page.html',
  styleUrls: ['./cardapio-edit.page.scss'],
})
export class CardapioEditPage implements OnInit {
  title = 'Novo produto';

  cardapioModel = {
    category: '',
    name: '',
    price: null,
    description: ''
  }

  constructor(
    private toast: ToastService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    try {
      // chamar a api
      this.toast.showSuccess('Produto cadastrado com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao cadastrar o produto');
    }
  }
}
