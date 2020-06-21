import React, { useContext } from 'react';
import {GlobalContaxt} from '../contax/GlobalState';

const AccountSum = () => {
    const { transaction } = useContext(GlobalContaxt);

    const amounts = transaction.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

    return(
        <div className="summry">
            <div className="income">
                <h4>Income</h4>
            <p>{income}</p>
            </div>
            <div className="expance">
            <h4>Expance</h4>
            <p>{expense}</p>
            </div>
        
        </div>
 );
}

export default AccountSum;