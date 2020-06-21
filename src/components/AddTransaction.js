import React, { useState, useContext } from 'react';
import {GlobalContaxt} from '../contax/GlobalState';

const AddTransaction = () => {
    const [discrption, setDiscription] = useState();
    const [amount, setAmount] = useState();

    const { addTransaction } = useContext(GlobalContaxt);
    const onSubmit= e => {
        e.preventDefault();

        const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        discrption,
        amount: +amount
    }
    addTransaction(newTransaction);
    }

    return(
        <div className="trans">
                <h3>Add Transaction</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-div">
                        <label htmlFor="discrption">Discription</label><br/>
                        <input type="text" 
                                id="discrption" 
                                placeholder="Add Discription"
                                value={discrption}
                                onChange= {(e) => setDiscription(e.target.value)} 
                                
                                />
                        </div>
                    <div className="form-div2">
                    <label htmlFor="amount">Transaction Amount</label><br/>
                    
                        <input type="number" 
                                id="amount" 
                                placeholder="Add Transaction"
                                value={amount} 
                                onChange= {(e) => setAmount(e.target.value)} 
                                
                                />

                    </div>
                    <button className="btn">Add Transaction</button>
                </form>
            <p>Developed by M.Azhar ALi from PIAIC FSD</p>
        </div>


    );
}

export default AddTransaction;