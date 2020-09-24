import { CardType } from './card-type.enum';
import { IOrdeDeliveryAddress } from './iorder-delivery-address';
import { PaymentType } from './payment-type.enum';

export interface IOrderDetailResponse {
    _id?: string;
    number?: string;
    date?: Date;
    status?: number;
    statusName?: string;
    total?: number;
    customer?: {
        id: string;
        name: string;
        phone: string;
    };
    address?: IOrdeDeliveryAddress;
    deliveryPlaceType?: number;
    delivery?: {
        free: boolean,
        tax: number,
    };
    payment?: {
        paymentType: PaymentType;
        changeFor: number;
        cardType: CardType;
    };
    items?: [{
        name: string;
        description: string;
        notes: string;
        price: number;
        quantity: number;
        total: number
    }];
}
