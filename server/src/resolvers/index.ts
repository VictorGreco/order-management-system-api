import { orders } from '../data';
import { IOrder, ICustomer, IItem } from '../types';

export const Query = {
    // FIXME: check why id is not being passed from query
    order: (id: string): IOrder => orders.find(order => order.id === id) || orders[0]
}

export const Mutation = {
    updateSingleOrderState: (id: string, state: string): IOrder => {
        // FIXME: check why id is not being passed from query
        const orderFound = orders.find(order => order.id === id) || orders[0];

        if (orderFound) {
            orderFound.state = state;
            orderFound.lastUpdated = `${new Date()}`;
        }

        return orderFound;
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