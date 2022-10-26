
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
import Category from './Pages/Category/Category';
import Checkout from './Pages/Checkout/Checkout';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>,
          loader:()=>fetch('http://localhost:5000/courses'),
        },
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('http://localhost:5000/courses'),
        },
        {
          path:'/courses',
          element:<Courses></Courses>,
          loader:()=>fetch('http://localhost:5000/courses'),
        },
        {
          path:'/category/:id',
          element:<Category></Category>,
          loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)

      },
        {
          path:'/category/checkout/:id',
          element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
          loader: ({params})=> fetch(`http://localhost:5000/category/checkout/${params.id}`)

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
   
    <div>
      <RouterProvider router={router} ></RouterProvider>
   
    </div>
  );
}

export default App;
