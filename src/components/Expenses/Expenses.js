import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFiteredYear] = useState("2020");
  const filterChange = (selectedYear) => {
    setFiteredYear(selectedYear);
  }
  return (
    <div>
    

    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterChange = {filterChange}/>
    {props.items.map(item => <ExpenseItem />)}
  </Card>
  </div>
    
  );
}

export default Expenses;
