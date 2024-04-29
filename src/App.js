import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="App-content">
        <h1 className='Royal'>The Royal Bank of Flatiron</h1>
        <TransactionForm onAddTransaction={handleAddTransaction} />
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
