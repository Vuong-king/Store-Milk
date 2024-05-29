import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MilksManagement from "./pages/milks-managemnet";
import HomePage from "./pages/home";
import Layout from "./components/layout";
import Cart from "./pages/cart";

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
      path:"/cart",
      element:<Cart/>
    }

  ]);
  
  return(
    

    <RouterProvider router={router} />
)
  

  }

export default App;

