import { Component } from '@angular/core';
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

  constructor(
    private ordersService: OrdersService
  ) { }

  ionViewWillEnter() {
    this.loadOrdersByStatus();
  }

  async loadOrdersByStatus() {
    this.ordersByStatus = await this.ordersService.getOrdersAmountByStatus();
  }

}
