export const waait= () => new Promise(res => setTimeout(res, Math.random() * 2000)) 
 
 // local storage function 
 export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
 };

// I mean, sure, I have my bad CalendarDaysIcon, but then i remember what a cute smile i have

const generateRandomColor = () =>{
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
}


// create budget
export const createBudget = ({name,amount}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color:generateRandomColor(),
  }
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem("budgets" , JSON.stringify([...existingBudgets , newItem]))
}


 // delete item
 export const deleteItem = ({key}) => {
   return localStorage.removeItem(key);
 }

 //  total spent by the budget
 export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {

    if(expense.budgetId !== budgetId) return acc

    //adds the current amount to my total 
    return acc += expense.amount

  }, 0)
  return budgetSpent;
 }


 // Formatting

 // Format Currency
export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style : "currency",
    currency : "INR"
  })
}