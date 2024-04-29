// TransactionList.js
import React, { useState } from 'react';

const TransactionList = ({ transactions }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState([...transactions]);

  const handleSearch = () => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      // Reset filtered transactions to show all when search input is empty
      setFilteredTransactions([...transactions]);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setFilteredTransactions([...transactions]);
  };

  return (
    <div>
      <h2>Transactions</h2>
      <div style={{ marginBottom: '10px' }}>
        <h1>Search</h1> {/* Move search below the h1 heading */}
        <input
          type="text"
          placeholder={searchTerm ? '' : 'Search your recent transactions'}
          value={searchTerm}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', borderRadius: '20px', border: '1px solid #ccc' }}
        />
        {searchTerm && (
          <button
            onClick={handleClearSearch}
            style={{
              marginLeft: '10px',
              padding: '8px 16px',
              borderRadius: '20px',
              backgroundColor: '#dc3545',
              color: '#fff',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Clear
          </button>
        )}
        {!searchTerm && (
          <span style={{ marginLeft: '10px', color: '#888' }}>Search your recent Transactions</span>
        )}
        <button
          onClick={handleSearch}
          style={{
            marginLeft: '10px',
            padding: '8px 16px',
            borderRadius: '20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
