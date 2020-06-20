import React from 'react';
import TransactionHistory from './TransHistory';

export const Transactions = ({ transaction }) => {
    return(
    <li className="postive">
                    {transaction.discrption}
                    <span>{transaction.amount}</span>
                    <button className="delbtn">x</button>
                </li>
    );
}

