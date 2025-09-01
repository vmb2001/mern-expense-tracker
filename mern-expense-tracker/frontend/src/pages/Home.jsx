import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Expense Manager
        </h1>
        <ExpenseForm />
        <ExpenseList />
      </div>
    </div>
  );
}
