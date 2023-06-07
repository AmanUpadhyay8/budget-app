// react router dom imports
import { Form, useLoaderData } from "react-router-dom";

// helper functions
import { createBudget, fetchData, waait } from "../helpers"

//components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";

// library
import { toast } from "react-toastify";



// Loader
export function dashboardLoader() {
    const userName = fetchData("userName");
    const budgets = fetchData("budgets");
    return { userName , budgets };
}

//actions
export async function dashboardAction({request}) {
  await waait();
  const data = await request.formData();
  console.log({data , request});
  const {_action, ...values} = Object.fromEntries(data);

  // new user submission
  if(_action === "newUser"){
    try{
      localStorage.setItem("userName", JSON.stringify(values.userName))
      return toast.success(`Welcome ${values.userName}`)
    } catch (e){
        throw new Error("There was a problem creating your account.");
    }
  }
  if(_action === "createBudget"){
    try{
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount
      })
      return toast.success("Budget Created")
    } catch(e){
      throw new Error("There was a problem creating your budget.")
    }
  }
}


const Dashboard = () => {

  const { userName, budgets } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>Welcome back, <span className="accent">{userName}</span></h1>
          <div className="grid-sm">
            {
              budgets && budgets.length > 0
              ? (
                <div className="grid-lg">
                  <div className="flex-lg">
                    <AddBudgetForm /> 
                  </div>
                </div>
              ) :  (
                <div className="grid-sm">
                  <p>Personal budgeting is the secret financial freedom.</p>
                  <p>Create a budget to get started!</p>
                  <AddBudgetForm /> 
                </div>
              )
            }
          </div>
        </div>
      ) : <Intro />}
    </>
  )
}

export default Dashboard
