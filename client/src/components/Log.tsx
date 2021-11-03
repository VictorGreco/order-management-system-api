import React from 'react';
import {useQuery, gql, DocumentNode} from '@apollo/client';

const QUERY_MOCK: DocumentNode = gql`
    {
        order(id: "ORDER_ID_1") {
            id
            state
            employee {
                id
            }
            customer {
                id
            }
        }
    }
`;

const Log: React.FC = (): JSX.Element => {
    const {loading, data, error} = useQuery(QUERY_MOCK);

    return (
        <>{!loading ? JSON.stringify(data || error, null, 2) : 'Loading...'}</>
    );
};

export default Log;
