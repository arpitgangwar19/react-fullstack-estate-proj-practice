import "./layout.scss";
import HompePage from "./routes/HomePage/HompePage";
import {createBrowserRouter,RouterProvider,Route,Link} from "react-router-dom";
import ListPage from "./routes/ListPage/ListPage";
import Layout from "./routes/Layout/Layout";
import SinglePage from './routes/SinglePage/SinglePage';
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
       { path: "/",
        element: <HompePage/>
      },
      { path: "/list",
        element: <ListPage/>
      },
      { path: "/:id",
        element: <SinglePage/>
      }
      ,
      { path: "/profile",
        element: <ProfilePage/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
      ]
    }
   
  ]);
  return (

    <>
      
      <RouterProvider router={router} />
    </>
    
  );
  
}

export default App;