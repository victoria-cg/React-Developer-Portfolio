//react router and outlet component here

// import Outlet component from 'react-router-dom', outlet is where different pages/views will be rendered based on the URL
import { Outlet } from 'react-router-dom';
//import header component which contains navigation component
import Header from './components/Header';
//import footer component
import Footer from './components/Footer';

//similar to main layout in handlebars.js, the app function will produce the nav component and then conditionally render the URL specific pages in the 'main' element
function App() {
  // The Outlet component will conditionally change pages based on the URL
  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default App;
