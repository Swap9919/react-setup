import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


function NewExpense(props) {

      const saveExpenseDataHandler = (enteredExpenseData) => {
            const expenseData = {
                  ...enteredExpenseData,
                  id: Math.random.toString()
            };
            props.onAddExpense(expenseData);
      }

      return <div className="new-expense">
            <form>
                  <ExpenseForm onSaveExpensedata={saveExpenseDataHandler}/>
            </form>
      </div>
}
export default NewExpense;