import React from 'react';
import PropTypes from 'prop-types';
//styles
import './TransactionHistory.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className="TransactionHistoryWrapper">
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className="type">{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.any.isRequired,
};

export default TransactionHistory;
