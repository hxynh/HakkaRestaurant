import './App.css'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';

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
      element: <Menu />
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
