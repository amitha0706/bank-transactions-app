import React from 'react';
import TransactionCard from './TransactionCard';

const transactions = [
  { title: "TRANSFER TO MONEY MARKET...", date: "Feb 7, 2023", amount: -1.25 },
  { title: "ACH ELECTRONIC CREDIT", date: "Feb 7, 2023", amount: 35.00 },
  { title: "ACH ELECTRONIC DEBIT-ALLY...", date: "Feb 6, 2023", amount: 10.00 },
  { title: "TRANSFER TO MONEY MARKET...", date: "Feb 3, 2023", amount: -10.00 },
];

const TransactionList = () => {
  return (
    <div className="transaction-list">
      {transactions.map((tx, idx) => (
        <TransactionCard key={idx} {...tx} />
      ))}
    </div>
  );
};

export default TransactionList;
