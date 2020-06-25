import { Component } from '@angular/core';
import { AlertService } from './../../core/services/alert.service';
import { ToastService } from './../../core/services/toast.service';
import { CardapioService } from './../shared/cardapio.service';

@Component({
  selector: 'app-cardapio-list',
  templateUrl: './cardapio-list.page.html',
  styleUrls: ['./cardapio-list.page.scss'],
})
export class CardapioListPage {
  products: ICardapioListResponse[] = [];

  constructor(
    private alert: AlertService,
    private toast: ToastService,
    private cardapioService: CardapioService
  ) { }

  async ionViewDidEnter() {
    this.products = await this.cardapioService.getAll();
  }

  remove(produto: ICardapioResponse) {
    this.alert.showConfirmDelete(produto.name, () => this.executeRemove(produto));
  }

  private async executeRemove(produto: ICardapioResponse) {
    try {
      // chamar a api para remover
      await this.cardapioService.delete(produto._id);

      // Removendo da tela
      const index = this.products.indexOf(produto);
      this.products.splice(index, 1);

      this.toast.showSuccess('Produto removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o produto');
    }
  }
}
