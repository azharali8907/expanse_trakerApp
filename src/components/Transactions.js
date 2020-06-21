import React, { useContext } from 'react';
import {GlobalContaxt} from '../contax/GlobalState';

export const Transactions = ({ transaction }) => {

    const { delTransaction } = useContext(GlobalContaxt);

    const sign = transaction.amount < 0 ? '-' : '+';
    return(
    <li className={transaction.amount < 0 ? 'nagtive':'postive'}>
                    {transaction.discrption}
                    <span>{sign}${Math.abs(transaction.amount)}</span>
                    <button onClick= {() => {delTransaction(transaction.id)}} className="delbtn">x</button>
                </li>
    );
}

