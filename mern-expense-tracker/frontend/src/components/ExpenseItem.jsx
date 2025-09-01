// src/components/ExpenseItem.jsx
import API from "../api";

export default function ExpenseItem({ expense, fetchExpenses }) {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      try {
        await API.delete(`/${expense._id}`);
        fetchExpenses();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="bg-gray-600 rounded-lg p-4 flex justify-between items-center shadow hover:bg-gray-500 transition">
      <div>
        <p className="font-bold text-white">
          {expense.title} - ₹{expense.amount}
        </p>
        <p className="text-gray-300 text-sm">
          {expense.category} | {expense.description}
        </p>
      </div>
      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold p-2 rounded transition"
      >
        Delete
      </button>
    </div>
  );
}
