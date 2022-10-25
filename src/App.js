
import './App.css';
import Main from './Layout/Main';
import {createBrowserRouter} from 'react-router-dom';
import {RouterProvider} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import PrivateRoutes from './PrivateRotes/PrivateRoutes';
import Courses from './Pages/Courses/Courses';
import FAQ from './Pages/FAQ/FAQ';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>,
        },
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/courses',
          element:<Courses></Courses>
        },
        {
          path:'/faq',
          element:<FAQ></FAQ>
        },
        {
          path:'/blog',
          element:<PrivateRoutes><Blog></Blog></PrivateRoutes>,
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
      ]
    }
  ]);
  return (
   
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
   
    </div>
  );
}

export default App;
