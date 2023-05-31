import { CurrencyDollarIcon } from "@heroicons/react/24/solid"
import { Form } from "react-router-dom"

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <Form
        method="post"
        className="grid-sm"
      >
        <div className="grid-xs">
            <label htmlFor="newBudget">Budget Name </label>
            <input 
                type="text" 
                name="newBudget"  
                id="newBudget"
                placeholder="e.g, Coffee"
                required
                />
        </div>
        <div className="grid-xs">
            <label htmlFor="newBudgetAmount">Amount</label>
            <input 
                type="number"
                step={0.1}
                name="newBudgetAmount"
                id="newBudgetAmount"
                placeholder="e.g, 1000$"
                required
                inputMode="decimal"
                />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button type="submit" className="btn">
            <span>Create budget</span>
            <CurrencyDollarIcon width={25} />
        </button>
      </Form>
    </div>
  )
}

export default AddBudgetForm
