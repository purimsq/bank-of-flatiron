// TransactionForm.js
import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      date,  
      description,
      amount,
      category,
      date: new Date().toLocaleDateString(),
    };
    onAddTransaction(newTransaction);
    setDate ('');
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
         type="text"
         placeholder="Date"
         value={date}
         onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
         <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </form>
      <button type="submit">Add Transaction</button>
    </div>
  );
};

export default TransactionForm;
