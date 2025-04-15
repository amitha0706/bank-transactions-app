import React from 'react';

const AllTransactions = () => {
  return (
    <div className="all-transactions">
      <div className="tabs">
        <span className="active">Transactions</span>
        <span>Scheduled</span>
        <span className="right-links">Advanced Search | View Last Statement</span>
      </div>
      <div className="filters">
        <select>
          <option>Last 30 Days</option>
          <option>Last 60 Days</option>
        </select>
        <input type="text" placeholder="Search" />
        <select>
          <option>Show All</option>
        </select>
      </div>
      <div className="table">
        <div className="header">
          <span>Date</span>
          <span>Description</span>
          <span>Debit</span>
          <span>Credit</span>
          <span>Balance</span>
        </div>
        <div className="row">
          <span>Feb 7, 2023</span>
          <span>Transfer to Money Market 06:10a #6524</span>
          <span>-$1.25</span>
          <span></span>
          <span>$188.67</span>
        </div>
        <div className="row">
          <span>Feb 7, 2023</span>
          <span>ACH Electronic Credit - CAPITAL ONE N.A. CAPITALONE</span>
          <span></span>
          <span className="credit">$35.00</span>
          <span>$191.21</span>
        </div>
        <div className="row">
          <span>Feb 6, 2023</span>
          <span>ACH Electronic Debit - Ally..</span>
          <span></span>
          <span className="credit">$10.00</span>
          <span>$181.21</span>
        </div>
        <div className="row">
          <span>Feb 3, 2023</span>
          <span>Transfer to Money Market</span>
          <span>-$10.00</span>
          <span></span>
          <span>$198.67</span>
        </div>
      </div>
    </div>
  );
};

export default AllTransactions;
