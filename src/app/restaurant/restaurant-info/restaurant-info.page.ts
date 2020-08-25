import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { ToastService } from './../../core/services/toast.service';
import { ViaCepService } from './../../core/services/via-cep.service';
import { IResturantModel } from './../shared/irestaurant-model';
import { RestaurantService } from './../shared/restaurant.service';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.page.html',
  styleUrls: ['./restaurant-info.page.scss'],
})
export class RestaurantInfoPage implements OnInit {
  @ViewChild('inputNumber', { static: true })
  inputNumber: IonInput;

  restaurant: IResturantModel = {};
  id: string;

  validationText = {
    required: 'Campo obrigatório',
    email: 'E-mail inválido'
  };

  constructor(
    private restaurantService: RestaurantService,
    private viaCepService: ViaCepService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.loadRestaurant();
  }

  async getAddressByCep() {
    try {
      if (this.restaurant.cep) {
        const result = await this.viaCepService.getAddressByCep(this.restaurant.cep);
        if (result) {
          this.restaurant.stret = result.logradouro;
          this.restaurant.neighborhood = result.bairro;
          this.restaurant.city = result.localidade;

          if (this.inputNumber) {
            this.inputNumber.setFocus();
          }
        }
      }

    } catch (error) {
      this.toast.showError('Ocorreu algum erro ao buscar o cep. Por favor tente novamente');
    }
  }

  async loadRestaurant() {
    const result = await this.restaurantService.get();
    if (result) {
      this.restaurant = result;
      this.id = result._id;
    }
  }

  async onSubmit() {
    try {
      const result = await this.restaurantService.save(this.restaurant, this.id);
      this.id = result._id;
      this.toast.showSuccess('Dados do restaurante salvo com sucesso.');
    } catch (error) {
      this.toast.showError('Ocorreu um erro ao salvar os dados do restaurante.');
    }
  }
}
