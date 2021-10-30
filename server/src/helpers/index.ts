import { MOCKED_ORDERS as orders } from '../data';
import { IOrder } from '../types';

export const handleError = (code: string): void => {
    throw new Error(code);
}

export const findOrderById = (id: string): IOrder | undefined =>
    orders.find(order => order.id === id);