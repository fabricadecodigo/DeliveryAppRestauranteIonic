import { ToastService } from './../../core/services/toast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.page.html',
  styleUrls: ['./category-edit.page.scss'],
})
export class CategoryEditPage implements OnInit {
  title = 'Nova categoria';

  categoryModel = {
    name: ''
  };

  constructor(
    private toast: ToastService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    try {
      // chamar a api
      this.toast.showSuccess('Categoria cadastrada com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao cadastrar a categoria');
    }
  }
}
