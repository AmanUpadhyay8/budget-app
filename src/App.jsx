import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Layouts
import Main, { mainLoader } from "./layouts/Main";

//Actions
import { logoutAction } from "./actions/logout";


// Routes Pages
import Dashboard, { dashboardAction, dashboardLoader } from "./Pages/Dashboard";
import Error from "./Pages/Error";
import ExpensesPage, { expensesLoader } from "./Pages/ExpensesPage";




const router = createBrowserRouter([
  {
    path : "/",
    element : <Main />,
    loader : mainLoader,
    errorElement : <Error />,
    children : [
      {
        index : true,
        element : <Dashboard />,
        loader : dashboardLoader,
        action : dashboardAction,
        errorElement : <Error />,
      },
      {
        path : "expenses",
        element : <ExpensesPage />,
        loader : expensesLoader,
      },
      {
        path: "logout",
        action: logoutAction,
      }
    ]
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
