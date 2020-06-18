import { Component } from '@angular/core';
import { AlertService } from './../../core/services/alert.service';
import { ToastService } from './../../core/services/toast.service';
import { CategoryService } from './../shared/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage {
  categories: ICategoryResponse[] = [];

  constructor(
    private alert: AlertService,
    private toast: ToastService,
    private categoryService: CategoryService
  ) { }

  ionViewDidEnter() {
    this.loadCategories();
  }

  async loadCategories() {
    this.categories = await this.categoryService.getAll();
  }

  remove(category: ICategoryResponse) {
    this.alert.showConfirmDelete(category.name, () => this.executeRemove(category));
  }

  private async executeRemove(category: ICategoryResponse) {
    try {
      // chamar a api para remover
      await this.categoryService.delete(category._id);

      // Removendo da tela
      const index = this.categories.indexOf(category);
      this.categories.splice(index, 1);

      this.toast.showSuccess('Produto removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o produto');
    }
  }
}
