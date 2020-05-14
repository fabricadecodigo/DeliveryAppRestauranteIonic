import { ToastService } from './../../core/services/toast.service';
import { AlertService } from './../../core/services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  categories: any[] = [];

  constructor(
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      const category = {
        name: `Hambúrguer ${i + 1}`,
      };

      this.categories.push(category);
    }
  }

  remove(category: any) {
    this.alert.showConfirmDelete(category.name, () => this.executeRemove(category));
  }

  private executeRemove(category: any) {
    try {
      // chamar a api para remover

      // Removendo da tela
      const index = this.categories.indexOf(category);
      this.categories.splice(index, 1);

      this.toast.showSuccess('Produto removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o produto');
    }
  }
}
