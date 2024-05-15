//react router and outlet component here

// import Outlet component from 'react-router-dom'
import { Outlet } from 'react-router-dom';
//import nav for this project similar to the class example below?
//import Nav from './components/NavTabs';

//similar to main layout in handlebars.js, the app function will produce the nav component and then conditionally render the URL specific pages in the 'main' element
function App() {
  // The Outlet component will conditionally change pages based on the URL
  //remove mx-3 class name? specific to bootstrap in example code from class?
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
