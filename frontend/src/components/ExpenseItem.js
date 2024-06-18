import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <div>
      <p>{expense.description}: ${expense.amount} ({expense.category})</p>
    </div>
  );
};

export default ExpenseItem;
