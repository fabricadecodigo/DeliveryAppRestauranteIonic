export interface IOrderResponse {
    _id: string;
    number: string;
    date: Date;
    status: number;
    statusName: string;
    deliveryPlaceType: number;
    total: number;
}
