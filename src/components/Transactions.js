import React from 'react';

export const Transactions = ({ transaction }) => {
    return(
    <li className={transaction.amount < 0 ? 'nagtive':'postive'}>
                    {transaction.discrption}
                    <span>{transaction.amount}</span>
                    <button className="delbtn">x</button>
                </li>
    );
}

