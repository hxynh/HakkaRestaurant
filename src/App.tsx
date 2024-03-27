import './App.css'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PlaceOrder from './pages/PlaceOrder';
import Cart from './pages/Cart';

function App() {

  const router = createBrowserRouter([
    {
      path: "",
      element: <Home />
    },
    {
      path: "aboutUs",
      element: <AboutUs />
    },
    {
      path: "menu",
      element: <PlaceOrder />
    },
    {
      path: "cart",
      element: <Cart />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
