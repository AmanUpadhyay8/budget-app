// react-router-dom imports
import { redirect } from "react-router-dom";

// helper functions
import { deleteItem } from "../helpers";

//library
import { toast } from "react-toastify";


export async function logoutAction () {
    //delete the user
    deleteItem({
        key : "userName",
    })
    //delete the expenses
    deleteItem({
        key : "expenses",
    })
    //delete the budget
    deleteItem({
        key : "budgets",
    })
    toast.success("Account Deleted")

    // return a redirect
    return redirect("/");
}