// dummy data
export let orders = [
    {
      id: '1',
      state: 'open',
      customer: {
        id: '1',
        name: 'customer 1',
        email: 'customer1@gmail.com'
      },
      items: [
        {
          id: '1',
          name: 'Item 1',
          price: 100,
          quantity: 1,
        },
        {
          id: '2',
          name: 'Item 2',
          price: 200,
          quantity: 2,
        },
      ],
      createdAt: '1565353600000',
      lastUpdated: '1565353600000',
    },
    {
      id: '2',
      state: 'in_progress',
      customer: {
        id: '2',
        name: 'customer 2',
        email: 'customer2@gmail.com'
      },
      items: [
        {
          id: '3',
          name: 'Item 3',
          price: 300,
          quantity: 3,
        },
        {
          id: '4',
          name: 'Item 4',
          price: 400,
          quantity: 4,
        },
      ],
      createdAt: '1565353600000',
      lastUpdated: '1565353600000',
    },
    {
      id: '3',
      state: 'complete',
      customer: {
        id: '3',
        name: 'customer3',
        email: 'customer3@gmail.com'
      },
      items: [
        {
          id: '3',
          name: 'Item 3',
          price: 300,
          quantity: 3,
        },
        {
          id: '4',
          name: 'Item 4',
          price: 400,
          quantity: 4,
        },
      ],
      createdAt: '1565353600000',
      lastUpdated: '1565353600000',
    }
  ];