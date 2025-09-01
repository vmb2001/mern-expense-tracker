// src/components/ExpenseForm.jsx
import { useState } from "react";
import API from "../api";

export default function ExpenseForm() {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/", formData);
      alert("Expense added!");
      setFormData({ title: "", amount: "", category: "", description: "" });
      window.location.reload(); // refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-700 p-6 rounded-lg mb-6 shadow"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-md transition"
      >
        Add Expense
      </button>
    </form>
  );
}
