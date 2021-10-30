// Mocked orders data
export const MOCKED_ORDERS = [
    {
      id: 'ORDER_ID_1',
      state: 'OPEN',
      customer: {
        id: 'CUSTOMER_ID_1',
        name: 'CUSTOMER_NAME_1',
        email: 'CUSTOMER_EMAIL_1'
      },
      employee: null,
      items: [
        {
          id: 'ITEM_ID_1',
          name: 'ITEM_NAME_1',
          price: 100,
          quantity: 1
        },
        {
          id: 'ITEM_ID_2',
          name: 'ITEM_NAME_2',
          price: 200,
          quantity: 2
        }
      ],
      createdAt: 'Sat Oct 30 2021 11:53:56 GMT+0200 (hora de verano de Europa central)',
      lastUpdated: 'Sat Oct 30 2021 11:53:56 GMT+0200 (hora de verano de Europa central)'
    },
    {
      id: 'ORDER_ID_2',
      state: 'IN_PROGRESS',
      customer: {
        id: 'CUSTOMER_ID_2',
        name: 'CUSTOMER_NAME_2',
        email: 'CUSTOMER_EMAIL_2'
      },
      employee: {
        id: 'EMPLOYEE_ID_1',
        name: 'EMPLOYEE_NAME_1'
      },
      items: [
        {
          id: 'ITEM_ID_3',
          name: 'ITEM_NAME_3',
          price: 300,
          quantity: 3
        },
        {
          id: 'ITEM_ID_4',
          name: 'ITEM_NAME_4',
          price: 400,
          quantity: 4
        }
      ],
      createdAt: 'Sat Oct 30 2021 11:53:56 GMT+0200 (hora de verano de Europa central)',
      lastUpdated: 'Sat Oct 30 2021 11:53:56 GMT+0200 (hora de verano de Europa central)'
    },
    {
      id: 'ORDER_ID_3',
      state: 'COMPLETE',
      customer: {
        id: 'CUSTOMER_ID_3',
        name: 'CUSTOMER_NAME_3',
        email: 'CUSTOMER_EMAIL_3'
      },
      employee: null,
      items: [
        {
          id: 'ITEM_ID_3',
          name: 'ITEM_NAME_3',
          price: 300,
          quantity: 3
        },
        {
          id: 'ITEM_ID_4',
          name: 'ITEM_NAME_4',
          price: 400,
          quantity: 4
        }
      ],
      createdAt: 'Sat Oct 30 2021 11:53:56 GMT+0200 (hora de verano de Europa central)',
      lastUpdated: 'Sat Oct 30 2021 11:53:56 GMT+0200 (hora de verano de Europa central)'
    }
  ];