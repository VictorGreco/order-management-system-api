import React from 'react';
import {useQuery, gql} from '@apollo/client';

const QUERY_MOCK = gql`
    {
        order(id: "ORDER_ID_1") {
            id
            state
            customer {
                id
            }
        }
    }
`;

const Log = () => {
    debugger;
    const {data} = useQuery(QUERY_MOCK);

    return data && <>{JSON.stringify(data, null, 2)}</>;
};

export default Log;
