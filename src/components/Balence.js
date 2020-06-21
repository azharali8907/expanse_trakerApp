import React, { useContext } from 'react';
import {GlobalContaxt} from '../contax/GlobalState';

const Balence = () => {
    const {transaction} = useContext(GlobalContaxt);

    const amounts = transaction.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);

    return(
        <div>
        <h4>Current Balence</h4>
        <h1>${total}</h1>
        </div>
 );
}

export default Balence;