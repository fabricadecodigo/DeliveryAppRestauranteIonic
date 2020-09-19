import { ToastService } from './../../core/services/toast.service';
import { OrderStatusEnum } from './../shared/order-status.enum';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { IOrderResponse } from './../shared/iorder.response';
import { IOrderStatus } from './../shared/iorders-status';
import { OrdersService } from './../shared/orders.service';

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
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private actionSheetController: ActionSheetController,
    private toast: ToastService
  ) { }

  ngOnInit() {
    const status = this.activatedRoute.snapshot.paramMap.get('status');
    this.loadOrders();
    this.loadOrderStatus();
    if (status) {
      this.selectedStatus = Number(status);
    }
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

  async showOrderOptions(order: IOrderResponse) {
    const actionSheet = await this.actionSheetController.create({
      header: `Pedido ${order.number}`,
      buttons: [
        {
          text: 'Detalhes do pedido',
          handler: () => {
            console.log('Confirmar pedido');
          }
        },
        {
          text: 'Confirmar pedido',
          handler: async () => {
            await this.changeOrderStatus(order, OrderStatusEnum.confirmed);
          }
        },
        {
          text: 'Disponível para entrega',
          handler: async () => {
            await this.changeOrderStatus(order, OrderStatusEnum.availableToDelivery);
          }
        },
        {
          text: 'Finalizado',
          handler: async () => {
            await this.changeOrderStatus(order, OrderStatusEnum.finished);
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

  async changeOrderStatus(order: IOrderResponse, newStatus: OrderStatusEnum) {
    try {
      const result = await this.ordersService.updateStatus(order._id, newStatus);
      this.orders[this.orders.indexOf(order)] = result;
    } catch (error) {
      this.toast.showError('Erro ao tentar alterar o status do pedido. por favor reabra o app e tente novamente');
    }
  }
}
