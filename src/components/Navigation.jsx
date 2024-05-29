//here we need the navigation links and event handler logic, which will get exported and then imported back into header.jsx as the nav component, which will then get passed to main.jsx as the header
//Need to update the following class example to reflect this portfolio project
//navigation needs to use react router dom to render the different page sections
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

//links get passed as props to navbar so that the navbar compnonent can render them as navbar divs
  export default function Navigation(){
    return(
      <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/about">
          About Me
        </Link>,
         <Link key={2} className="nav-link text-light" to="/portfolio">
         Portfolio
       </Link>,
        <Link key={3} className="nav-link text-light" to="/contact">
        Contact
      </Link>,
       <Link key={4} className="nav-link text-light" to="/resume">
       Resume
     </Link>
      ]}
    />
    );
  }
  