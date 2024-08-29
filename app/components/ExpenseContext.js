// components/ExpenseContext.js
import React, { createContext, useContext, useState } from 'react';

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [chartData, setChartData] = useState([]);

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses, chartData, setChartData }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => useContext(ExpenseContext);
