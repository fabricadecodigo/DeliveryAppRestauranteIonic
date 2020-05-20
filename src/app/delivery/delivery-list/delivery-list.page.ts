import { Component, OnInit } from '@angular/core';
import { ToastService } from './../../core/services/toast.service';
import { AlertService } from './../../core/services/alert.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.page.html',
  styleUrls: ['./delivery-list.page.scss'],
})
export class DeliveryListPage implements OnInit {
  deliveries: any[] = [];

  constructor(
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      const delivery = {
        neighborhood: `Bairro ${i + 1}`,
        timeToDelivery: 60,
        free: (i > 0) && ((i % 2) === 0),
        value: (10.5 * (i + 1))
      };

      this.deliveries.push(delivery);
    }
  }

  remove(delivery: any) {
    this.alert.showConfirmDelete(delivery.neighborhood, () => this.executeRemove(delivery));
  }

  private executeRemove(delivery: any) {
    try {
      // chamar a api para remover

      // Removendo da tela
      const index = this.deliveries.indexOf(delivery);
      this.deliveries.splice(index, 1);

      this.toast.showSuccess('Local de entrega removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o local de entrega');
    }
  }

}
