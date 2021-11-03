import { IOrder, ICustomer, IEmployee, IItem, IId } from '../types';
import { ERROR_CODES, ORDER_STATUS } from '../enums';
import { handleError, findOrderById } from '../helpers';

const { ORDER_NOT_FOUND } = ERROR_CODES;
const { IN_PROGRESS } = ORDER_STATUS;

export const Query = {
    order: (_: IOrder, order: IOrder): IOrder => {
        const { id } = order;
        const foundOrder = findOrderById(id);

        if (foundOrder) {
            return foundOrder;
        }

        handleError(ORDER_NOT_FOUND);
    }
}

export const Mutation = {
    updateSingleOrderStateAndEmployee: (_: IOrder, order: IOrder): IOrder => {
        const { id, state, employee=null } = order;
        const foundOrder = findOrderById(id);

        if (foundOrder) {

            return foundOrder.state = state,
                foundOrder.employee = employee,
                foundOrder.lastUpdated = `${new Date()}`,
                foundOrder;
        }

        handleError(ORDER_NOT_FOUND);
    }
}

export const Order = {
    id: (order: IOrder): string => order.id,
    state: (order: IOrder): string => order.state,
    customer: (order: IOrder): ICustomer => order.customer,
    employee: (order: IOrder): IEmployee | null =>
        order.state === IN_PROGRESS && order.employee || null,
    items: (order: IOrder): IItem[] => order.items,
    createdAt: (order: IOrder): string => order.createdAt,
    lastUpdated: (order: IOrder): string => order.lastUpdated
}

export const Customer = {
    id: (customer: ICustomer): string => customer.id,
    name: (customer: ICustomer): string => customer.name
}

export const Employee = {
    id: (employee: IEmployee): string => employee.id,
    name: (employee: IEmployee): string => employee.name
}

export const Item = {
    id: (item: IItem): string => item.id,
    name: (item: IItem): string => item.name,
    price: (item: IItem): number => item.price,
    quantity: (item: IItem): number => item.quantity
}