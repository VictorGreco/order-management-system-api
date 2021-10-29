interface IWithId {
  id: string;
}

interface IWithName {
  name: string;
}

export interface IOrder extends IWithId {
  state: string;
  customer: ICustomer;
  items: IItem[];
  createdAt: string;
  lastUpdated: string;
}

export interface ICustomer extends IWithId, IWithName {}

export interface IItem extends IWithId, IWithName {
  price: number;
  quantity: number;
}