import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from './../../core/services/toast.service';
import { DeliveryService } from './../shared/delivery.service';

@Component({
  selector: 'app-delivery-edit',
  templateUrl: './delivery-edit.page.html',
  styleUrls: ['./delivery-edit.page.scss'],
})
export class DeliveryEditPage implements OnInit {
  title = 'Novo local de entrega';

  deliveryModel: IDeliveryModel = {
    neighborhood: '',
    timeToDelivery: null,
    free: false,
    value: null
  };

  id: string;

  constructor(
    private toast: ToastService,
    private deliveryService: DeliveryService,
    private location: Location,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.loadDelivery(this.id);
    }
  }

  async loadDelivery(id: string) {
    try {
      const delivery = await this.deliveryService.getById(id);
      this.deliveryModel = {
        neighborhood: delivery.neighborhood,
        timeToDelivery: delivery.timeToDelivery,
        free: delivery.free,
        value: delivery.value
      };
    } catch (error) {
      console.error(error);
      this.toast.showError('Ocorreu algum erro ao tentar recuperar o local de entrega.');
    }
  }

  onFreeCheckboxChange() {
    if (this.deliveryModel.free) {
      this.deliveryModel.value = null;
    }
  }

  async onSubmit() {
    try {
      // chamar a api
      let result: IDeliveryResponse;
      if (this.id) {
        result = await this.deliveryService.update(this.id, this.deliveryModel);
      } else {
        result = await this.deliveryService.insert(this.deliveryModel);
      }

      if (result) {
        console.log(result);
        this.toast.showSuccess('Local de entrega cadastrado com sucesso');
        this.location.back();
      }
    } catch (error) {
      console.error(error);
      this.toast.showError('Erro ao cadastrar o local de entrega.');
    }
  }
}
