export interface IId {
  id: string;
}

export interface IName {
  name: string;
}

export interface IOrder extends IId {
  state: string;
  customer: ICustomer;
  employee: IEmployee | null;
  items: IItem[];
  createdAt: string;
  lastUpdated: string;
}

export interface ICustomer extends IId, IName {}

export interface IEmployee extends IId, IName {}

export interface IItem extends IId, IName {
  price: number;
  quantity: number;
}