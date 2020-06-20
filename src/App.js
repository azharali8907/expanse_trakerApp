import React from 'react';
import './App.css';
import Header from './components/Hader';
import Balence from './components/Balence';
import AccountSum from './components/AccountSum';
import TransactionHistory from './components/TransHistory';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './contax/GlobalState';

function App() {
  return ( 
  <GlobalProvider>
    <div className="body">
    <Header></Header>
    <div className="container">
    <Balence></Balence>
    <AccountSum></AccountSum>
    <TransactionHistory></TransactionHistory>
    <AddTransaction></AddTransaction>
    </div>
     </div>
  </GlobalProvider>
  );
}

export default App;
