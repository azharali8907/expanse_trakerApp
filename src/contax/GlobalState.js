import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//create initial state
const initialState = {
    transaction: []
}
//create the global contaxt
export const GlobalContaxt = createContext(initialState);

//create a provider for GlobalContaxt
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

// Delete action
    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
// Add action
function addTransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}

     return(
        <GlobalContaxt.Provider value = {
            {
                transaction: state.transaction,
                delTransaction,
                addTransaction    

            }
        }>
            {children}
        </GlobalContaxt.Provider>
    );
}