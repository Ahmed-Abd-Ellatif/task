export interface Orders {
  OrderId: number;
  OrderDate: string;
  UserId: string;
  Products: Products[];
  PaymentType: string;
}

export interface Products {
  ProductId: number;
  Quantity: number;
}
