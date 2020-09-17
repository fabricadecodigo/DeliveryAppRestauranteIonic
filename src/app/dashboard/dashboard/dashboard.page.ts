import { OrdersService } from './../../orders/shared/orders.service';
import { Component, OnInit } from '@angular/core';
import { IOrderAmountByStatusResponse } from './../../orders/shared/iorder-amount-by-status.response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  ordersByStatus: IOrderAmountByStatusResponse = {
    amountCreated: 0,
    amountConfirmed: 0,
    amountAvailableToDelivery: 0,
    amountFinished: 0
  };

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    this.loadOrdersByStatus();
  }

  async loadOrdersByStatus() {
    this.ordersByStatus = await this.ordersService.getOrdersAmountByStatus();
  }

}
