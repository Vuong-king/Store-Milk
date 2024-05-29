import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MilksManagement from "./pages/milks-managemnet";
import HomePage from "./pages/home";
import Layout from "./components/layout";

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

  ]);
  
  return(
    

    <RouterProvider router={router} />
)
  

  }

export default App;

