//In this file we need the router and paths for all the different page views

import ReactDOM from 'react-dom/client'
// Import createBrowserRouter and RouterProvider from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import bootstrap library to use for styling

 import 'bootstrap/dist/css/bootstrap.min.css'

//import all the different page components to be able to use them in the router

import App from './App.jsx';
import Error from './components/pages/Error.jsx';
 import Home from './components/pages/Home.jsx';
 import Contact from './components/pages/Contact.jsx';
 import About from './components/pages/About.jsx';
 import Portfolio from './components/pages/Portfolio.jsx';
 import Resume from './components/pages/Resume.jsx';

//Create client side react routes and their URL endpoints
//index: true indicates the home page
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
 ]);

//appends dynamic react content to the html element with an id of 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
