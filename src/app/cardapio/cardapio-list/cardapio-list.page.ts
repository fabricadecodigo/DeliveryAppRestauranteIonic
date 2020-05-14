import { ToastService } from './../../core/services/toast.service';
import { AlertService } from './../../core/services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio-list',
  templateUrl: './cardapio-list.page.html',
  styleUrls: ['./cardapio-list.page.scss'],
})
export class CardapioListPage implements OnInit {
  products: any[] = [];

  constructor(
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit() {

    for (let i = 0; i < 20; i++) {
      const product = {
        category: 'Hambúrguers',
        name: `Hambúrguer ${i + 1}`,
        price: (10.5 * (i + 1)),
        description: 'Pão artesanal de brioche, suculento blend de costela, cheddar cremoso, barbecue da casa, maionese da casa, crispy de bacon, onion rings',
        photoUrl: 'https://source.unsplash.com/sc5sTPMrVfk/640x531'
      };

      this.products.push(product);
    }
  }

  remove(produto: any) {
    this.alert.showConfirmDelete(produto.name, () => this.executeRemove(produto));
  }

  private executeRemove(produto: any) {
    try {
      // chamar a api para remover

      // Removendo da tela
      const index = this.products.indexOf(produto);
      this.products.splice(index, 1);

      this.toast.showSuccess('Produto removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o produto');
    }
  }
}
