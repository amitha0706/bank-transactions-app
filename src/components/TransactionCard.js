import React from 'react';

const TransactionCard = ({ title, date, amount }) => {
  return (
    <div className="card">
      <div className="plus-icon">+</div>
      <div className="details">
        <div>{title}</div>
        <small>{date}</small>
      </div>
      <div className="amount">
        <strong>{amount < 0 ? `-$${Math.abs(amount).toFixed(2)}` : `$${amount.toFixed(2)}`}</strong>
      </div>
    </div>
  );
};

export default TransactionCard;
