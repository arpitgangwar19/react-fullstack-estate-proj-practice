import "./layout.scss";
import HomePage from "./routes/HomePage/HomePage";
import {createBrowserRouter,RouterProvider,Route,Link} from "react-router-dom";
import ListPage from "./routes/ListPage/ListPage";
import {Layout} from "./routes/Layout/Layout";
import SinglePage from './routes/SinglePage/SinglePage';
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage";
import NewPostPage from "./routes/NewPostPage/NewPostPage";
import { singlePageLoadingData,listPageLoader, profilePageLoader } from "./lib/loaders";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
       { path: "/",
        element: <HomePage/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      
      { path: "/list",
        element: <ListPage/>,
        loader: listPageLoader
      },
      { path: "/:id",
        element: <SinglePage/>,
        loader: singlePageLoadingData,
      }
      ]
    },
    {
      path: "/",
      element: <Layout/>,
      children:[
       { path: "/",
        element: <HomePage/>
      }
      ,
      { path: "/profile",
        element: <ProfilePage/>,
        loader:profilePageLoader,

      },
      { path: "/profile/update",
        element: <ProfileUpdatePage/>
      },
      { path: "/add",
        element: <NewPostPage/>
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
