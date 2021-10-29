import { orders } from '../data';
import { IOrder, ICustomer, IItem } from '../types';

export const Query = {
    order: (_: IOrder, { id }: IOrder): IOrder => orders.find(order => order.id === id)
}

export const Mutation = {
    updateSingleOrderState: (_: IOrder, { id, state }: IOrder): IOrder => {
        const foundOrder = orders.find(order => order.id === id);

        if (foundOrder) {
            foundOrder.state = state;
            foundOrder.lastUpdated = `${new Date().getTime()}`;
        }

        return foundOrder;
    }
}


export const Order = {
    id: (order: IOrder): string => order.id,
    state: (order: IOrder): string => order.state,
    customer: (order: IOrder): ICustomer => order.customer,
    items: (order: IOrder): IItem[] => order.items,
    createdAt: (order: IOrder): string => order.createdAt,
    lastUpdated: (order: IOrder): string => order.lastUpdated
}

export const Customer = {
    id: (customer: ICustomer): string => customer.id,
    name: (customer: ICustomer): string => customer.name,
}

export const Item = {
    id: (item: IItem): string => item.id,
    name: (item: IItem): string => item.name,
    price: (item: IItem): number => item.price,
    quantity: (item: IItem): number => item.quantity,
}