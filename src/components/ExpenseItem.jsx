import React from 'react'
import { formatCurrency, formatDateToLocaleString, getAllMatchingItems } from "../helpers";
import { Link } from 'react-router-dom';

const ExpenseItem = ({ expense }) => {
  const budget = getAllMatchingItems({
    category : "budgets",
    key : "id",
    value : expense.budgetId,
  })[0];
  console.log("🚀 ~ Budget item ~ ", budget );

  return (
    <>
        <td>{expense.name}</td>
        <td>{formatCurrency((expense.amount))}</td>
        <td>{formatDateToLocaleString(expense.createdAt)}</td>  
        <td><Link to={`/budget/${budget.id}`}>{budget.name}</Link></td>
    </>
  )
}

export default ExpenseItem