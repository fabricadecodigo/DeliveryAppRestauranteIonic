import { Component, OnInit } from '@angular/core';
import { AlertService } from './../../core/services/alert.service';
import { ToastService } from './../../core/services/toast.service';
import { DeliveryService } from './../shared/delivery.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.page.html',
  styleUrls: ['./delivery-list.page.scss'],
})
export class DeliveryListPage {
  deliveries: IDeliveryResponse[] = [];

  constructor(
    private alert: AlertService,
    private toast: ToastService,
    private deliveryService: DeliveryService
  ) { }

  ionViewDidEnter() {
    this.loadDelivery();
  }

  async loadDelivery() {
    this.deliveries = await this.deliveryService.getAll();
  }

  remove(delivery: IDeliveryResponse) {
    this.alert.showConfirmDelete(delivery.neighborhood, () => this.executeRemove(delivery));
  }

  private async executeRemove(delivery: IDeliveryResponse) {
    try {
      // chamar a api para remover
      await this.deliveryService.delete(delivery._id);

      // Removendo da tela
      const index = this.deliveries.indexOf(delivery);
      this.deliveries.splice(index, 1);

      this.toast.showSuccess('Local de entrega removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o local de entrega');
    }
  }
}
