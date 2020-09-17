import { OrdersService } from './../shared/orders.service';
import { IOrderStatus } from './../shared/iorders-status';
import { IOrderResponse } from './../shared/iorder.response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {
  orders: IOrderResponse[] = [];
  ordersStatus: IOrderStatus[] = [];
  selectedStatus = -1;

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    this.loadOrders();
    this.loadOrderStatus();
  }

  async loadOrders() {
    this.orders = await this.ordersService.getAll();
  }

  loadOrderStatus() {
    this.ordersStatus = this.ordersService.getOrderStatus();
  }

  getOrders(status: number) {
    if (status < 0) {
      return this.orders;
    } else {
      return this.orders.filter(order => order.status === status);
    }
  }
}
