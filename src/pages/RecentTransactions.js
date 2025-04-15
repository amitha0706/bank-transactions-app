import React from 'react';
import TransactionList from '../components/TransactionList';
import { useNavigate } from 'react-router-dom';

const RecentTransactions = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Recent Transactions</h2>
      <div className="account-dropdown">
        <button>Checking ▼</button>
      </div>
      <TransactionList />
      <button className="view-all" onClick={() => navigate('/transactions')}>
        <span>📋</span> View All Transactions ➤
      </button>
    </div>
  );
};

export default RecentTransactions;
