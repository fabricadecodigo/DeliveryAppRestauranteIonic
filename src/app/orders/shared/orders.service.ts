import { IOrderStatus } from './iorders-status';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { DeliveryPlaceType } from './delivery-place-type.enum';
import { IOrderAmountByStatusResponse } from './iorder-amount-by-status.response';
import { IOrderResponse } from './iorder.response';
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

  getOrderStatus(): IOrderStatus[] {
    return [
      { value: OrderStatusEnum.created, text: 'Aguardando confirmação' },
      { value: OrderStatusEnum.confirmed, text: 'Pedido em preparo' },
      { value: OrderStatusEnum.availableToDelivery, text: 'Disponível para entrega' },
      { value: OrderStatusEnum.finished, text: 'Pedido entregue' }
    ];
  }
}
