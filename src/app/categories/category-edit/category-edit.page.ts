import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastService } from './../../core/services/toast.service';
import { CategoryService } from './../shared/category.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.page.html',
  styleUrls: ['./category-edit.page.scss'],
})
export class CategoryEditPage implements OnInit {
  title = 'Nova categoria';

  categoryModel: ICategoryModel = {
    name: ''
  };

  id: string;

  constructor(
    private toast: ToastService,
    private categoryService: CategoryService,
    private location: Location,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.loadCategory(this.id);
    }
  }

  async loadCategory(id: string) {
    try {
      const category = await this.categoryService.getById(id);
      this.categoryModel = {
        name: category.name
      };
    } catch (error) {
      console.error(error);
      this.toast.showError('Ocorreu algum erro ao tentar recuperar a categoria.');
    }
  }

  async onSubmit() {
    try {
      // chamar a api
      let result: ICategoryResponse;
      if (this.id) {
        result = await this.categoryService.update(this.id, this.categoryModel);
      } else {
        result = await this.categoryService.insert(this.categoryModel);
      }

      if (result) {
        console.log(result);
        this.toast.showSuccess('Categoria cadastrada com sucesso');
        this.location.back();
      }
    } catch (error) {
      this.toast.showError('Erro ao cadastrar a categoria');
    }
  }
}
