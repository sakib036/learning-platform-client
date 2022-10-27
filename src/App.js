
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
import NotFound from './Pages/NotFound/NotFound';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>,
          loader:()=>fetch('https://top-techedu-server.vercel.app/courses'),
        },
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('https://top-techedu-server.vercel.app/courses'),
        },
        {
          path:'/courses',
          element:<Courses></Courses>,
          loader:()=>fetch('https://top-techedu-server.vercel.app/courses'),
        },
        {
          path:'/category/:id',
          element:<Category></Category>,
          loader: ({params})=> fetch(`https://top-techedu-server.vercel.app/category/${params.id}`)

      },
        {
          path:'/category/checkout/:id',
          element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
          loader: ({params})=> fetch(`https://top-techedu-server.vercel.app/category/checkout/${params.id}`)

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
        {
          path:'/*',
          element:<NotFound></NotFound>
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
