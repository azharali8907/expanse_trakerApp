import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//create initial state
const initialState = {
    transaction: [
        {id: 1, discrption: "income 1", amount: "1000"},
        {id: 2, discrption: "expance 1", amount: "-300"},
        {id: 3, discrption: "income 2", amount: "1500"},
        {id: 4, discrption: "expance 2", amount: "-700"}

    ]
}
//create the global contaxt
export const GlobalContaxt = createContext(initialState);

//create a provider for GlobalContaxt
export const GlobalProvider = ({children}) => {
    const [state] = useReducer(AppReducer, initialState)
     return(
        <GlobalContaxt.Provider value = {
            {
                transaction: state.transaction
            }
        }>
            {children}
        </GlobalContaxt.Provider>
    );
}