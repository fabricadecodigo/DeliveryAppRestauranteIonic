import { ToastService } from './../../core/services/toast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-edit',
  templateUrl: './delivery-edit.page.html',
  styleUrls: ['./delivery-edit.page.scss'],
})
export class DeliveryEditPage implements OnInit {
  title = 'Novo local de entrega';

  deliveryModel = {
    neighborhood: '',
    timeToDelivery: null,
    free: false,
    value: null
  };

  constructor(
    private toast: ToastService
  ) { }

  ngOnInit() {
  }

  onFreeCheckboxChange($event) {
    if (this.deliveryModel.free) {
      this.deliveryModel.value = null;
    }
  }

  onSubmit() {
    try {
      console.log(this.deliveryModel);

      // chamar a api
      this.toast.showSuccess('Local de entrega cadastrado com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao cadastrar o local de entrega');
    }
  }
}
