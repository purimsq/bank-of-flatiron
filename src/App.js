import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm'; // Import TransactionForm component

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <div className="App-content">
        {/* Display Transaction List */}
        <TransactionList transactions={transactions} />

        {/* Display Transaction Form with Search Functionality */}
        <TransactionForm
          onAddTransaction={handleAddTransaction}
          transactions={transactions}
        />
      </div>
    </div>
  );
}

export default App;
