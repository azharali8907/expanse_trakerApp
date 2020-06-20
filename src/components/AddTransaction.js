import React, { useState } from 'react';

const AddTransaction = () => {
    const [discrption, setDiscription] = useState();
    const [amount, setAmount] = useState();
    return(
        <div>
            <h3>Add Transaction</h3>
        <form>
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
        </div>


    );
}

export default AddTransaction;