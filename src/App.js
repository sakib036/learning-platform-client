
import './App.css';
import Main from './Layout/Main';
import {createBrowserRouter} from 'react-router-dom';
import {RouterProvider} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Register from './Pages/Register/Register';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/blog',
          element:<Blog></Blog>,
        },
        {
          path:'/register',
          element:<Register></Register>
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
