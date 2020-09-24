import { ToastService } from './../../core/services/toast.service';
import { Component, OnInit } from '@angular/core';
import { IOrderAmountByStatusResponse } from './../../orders/shared/iorder-amount-by-status.response';
import { OrderStatusEnum } from './../../orders/shared/order-status.enum';
import { OrdersService } from './../../orders/shared/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  ordersByStatus: IOrderAmountByStatusResponse = {
    amountCreated: 0,
    amountConfirmed: 0,
    amountAvailableToDelivery: 0,
    amountFinished: 0
  };
  orderStatusEnum = OrderStatusEnum;
  interval: any;

  constructor(
    private ordersService: OrdersService,
    private toast: ToastService
  ) { }

  ionViewWillEnter() {
    this.loadOrdersByStatus();
    this.startGettingOrdersByMinute();
  }

  ionViewWillLeave() {
    clearInterval(this.interval);
  }

  async loadOrdersByStatus() {
    this.ordersByStatus = await this.ordersService.getOrdersAmountByStatus();
  }

  startGettingOrdersByMinute() {
    this.interval = setInterval(async () => {
      await this.loadOrdersByStatus();
      if (this.ordersByStatus.amountCreated > 0) {
        this.toast.showWarning('Existem pedidos pendentes aguardando confirmação');
      }
    }, 60000);
  }
}
