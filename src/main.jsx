//In this file we need the router and paths for all the different page views

import ReactDOM from 'react-dom/client'
// Import createBrowserRouter and RouterProvider from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//for commented out code, need to re-activate bootstrap, need to create router, need to make router paths for the real pages in this app

// import 'bootstrap/dist/css/bootstrap.min.css'

//import all the different page components to be able to use them in the router

import App from './App';
// import Error from './pages/Error';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import Blog from './pages/Blog';

// //Create client side react routes and their URL endpoints
const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: '/About',
//         element: <About />,
//       },
//       {
//         path: '/Blog',
//         element: <Blog />,
//       },
//       {
//         path: '/Contact',
//         element: <Contact />,
//       },
//     ],
//   },
 ]);

//appends dynamic react content to the html element with and id of 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
