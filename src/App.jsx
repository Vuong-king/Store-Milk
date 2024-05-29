import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MilksManagement from "./pages/milks-managemnet";
import HomePage from "./pages/home";
import Layout from "./components/layout";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Layout/>,
      children : [
        {
          path: "/",
          element: <HomePage/>, 
        },
        
      ]

    },
    {
      path: "/milk-management",
      element: <MilksManagement/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },

  ]);
  
  return(
    

    <RouterProvider router={router} />
)
  

  }

export default App;

