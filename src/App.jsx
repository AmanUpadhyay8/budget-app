import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Routes Pages
import Dashboard, { dashboardLoader } from "./Pages/Dashboard";
import Error from "./Pages/Error";


const router = createBrowserRouter([
  {
    path : "/",
    element : <Dashboard />,
    loader : dashboardLoader,
    errorElement : <Error />,
  },
  {
    path : "/about",
    element : <h1>Hello There</h1>
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
