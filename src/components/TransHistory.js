import React, {useContext} from 'react';
import {GlobalContaxt} from '../contax/GlobalState';
// import Transaction history
import { Transactions } from './Transactions'

const TransactionHistory = () => {
        const { transaction } = useContext(GlobalContaxt);
    
         return(
        <div className="history">
            <h3>Transaction History</h3>
            <ul  className="list">
            {transaction.map(transaction => (
            <Transactions key={transaction.id} transaction={transaction}/>
            )
            )}
            </ul>
            
        </div>
         );
}

export default TransactionHistory;
