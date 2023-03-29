
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Lessika from './components/Lessika';
import Login from './components/Login';
import Main from './Layout/Main';
import Private from './privaterouter/Private';

function App() {
        const router=createBrowserRouter([
          {
            path:'/',
            element:<Main></Main>,
            children:[
              {
                path:'/',
                element:<Home></Home>
              },
              {
                path:'/home',
                element:<Home></Home>
              },
              {
                path:'/login',
                element:<Login></Login>
              },
              {
                path:'/lessika',
                element:<Lessika></Lessika>
              },
              {
                path:'about',
                element:<Private><About></About></Private>
              },
              {
                path:'*',
                element:<div>this is working </div>
              }
            ]
          }
        ])
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
