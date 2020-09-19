import { CardType } from './../shared/card-type.enum';
import { PaymentType } from './../shared/payment-type.enum';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from './../../core/services/toast.service';
import { DeliveryPlaceType } from './../shared/delivery-place-type.enum';
import { IOrdeDeliveryAddress } from './../shared/iorder-delivey-address';
import { IOrderDetailResponse } from './../shared/iorder-detail.response';
import { OrdersService } from './../shared/orders.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  order: IOrderDetailResponse = {};
  deliveryPlaceType = DeliveryPlaceType;
  paymentType = PaymentType;

  constructor(
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private toast: ToastService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.loadOrder(id);
    }
  }

  async loadOrder(id: string) {
    try {
      this.order = await this.ordersService.getById(id);
    } catch (error) {
      this.toast.showError('Ocorreu algum erro ao tentar buscar os dados do pedido. Por favor tente novamente.')
    }
  }

  getAddressText(address: IOrdeDeliveryAddress) {
    let addressInfo = `${address.street}, ${address.number}`;
    if (address.complement) {
      addressInfo += ` - ${address.complement}`;
    }
    addressInfo += ` - ${address.neighborhood}`;
    return addressInfo;
  }

  getCardText(cardType: CardType) {
    const cards = {
      [CardType.mastercardCredit]: 'Mastercard crédito',
      [CardType.mastercardDebit]: 'Mastercard débito',
      [CardType.visaCredit]: 'Visa crédito',
      [CardType.visaDebit]: 'Visa débito',
    };

    return cards[cardType];
  }

 }
