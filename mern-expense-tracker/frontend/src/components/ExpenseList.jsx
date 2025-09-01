// src/components/ExpenseList.jsx
import { useEffect, useState } from "react";
import API from "../api";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const res = await API.get("/");
      setExpenses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="space-y-4">
      {expenses.length === 0 ? (
        <p className="text-gray-300 text-center">No expenses yet.</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense._id}
            expense={expense}
            fetchExpenses={fetchExpenses}
          />
        ))
      )}
    </div>
  );
}
