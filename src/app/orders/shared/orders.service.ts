import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { DeliveryPlaceType } from './delivery-place-type.enum';
import { IOrderAmountByStatusResponse } from './iorder-amount-by-status.response';
import { IOrderDetailResponse } from './iorder-detail.response';
import { IOrderResponse } from './iorder.response';
import { IOrderStatus } from './iorders-status';
import { OrderStatusEnum } from './order-status.enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient
  ) { }

  getOrdersAmountByStatus() {
    return this.http.get<IOrderAmountByStatusResponse>(`${environment.api}/orders-amount-by-status`)
      .toPromise();
  }

  getStatusName(status: number, deliveryPlaceType: DeliveryPlaceType) {
    switch (status) {
      case OrderStatusEnum.created:
        return 'Aguardando confirmação';
      case OrderStatusEnum.confirmed:
        return 'Pedido em preparo';
      case OrderStatusEnum.availableToDelivery:
        if (deliveryPlaceType === DeliveryPlaceType.delivery) {
          return 'Saiu para entrega';
        } else if (deliveryPlaceType === DeliveryPlaceType.restaurant) {
          return 'Disponível para retirada';
        } else {
          throw new Error();
        }
      case OrderStatusEnum.finished:
        return 'Pedido entregue';
    }
  }

  getAll() {
    return this.http.get<IOrderResponse[]>(`${environment.api}/orders`)
      .pipe(
        map(response => {
          return response.map(item => (
            {
              ...item,
              statusName: this.getStatusName(item.status, item.deliveryPlaceType)
            }
          ));
        })
      ).toPromise();
  }

  getById(id: string) {
    return this.http.get<IOrderDetailResponse>(`${environment.api}/orders/${id}`)
      .pipe(
        map(response => {
          response.statusName = this.getStatusName(response.status, response.deliveryPlaceType);
          return response;
        })
      ).toPromise();
  }

  getOrderStatus(): IOrderStatus[] {
    return [
      { value: OrderStatusEnum.created, text: 'Aguardando confirmação' },
      { value: OrderStatusEnum.confirmed, text: 'Pedido em preparo' },
      { value: OrderStatusEnum.availableToDelivery, text: 'Disponível para entrega' },
      { value: OrderStatusEnum.finished, text: 'Pedido entregue' }
    ];
  }

  updateStatus(orderId: string, newStatus: OrderStatusEnum) {
    return this.http.put<IOrderResponse>(`${environment.api}/orders/${orderId}`, { newStatus })
      .pipe(
        map(response => {
          response.statusName = this.getStatusName(response.status, response.deliveryPlaceType);
          return response;
        })
      ).toPromise();
  }
}
