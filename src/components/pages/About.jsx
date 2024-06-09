//import the photo from the assets folder: why did VS code not autocomplete this file path? Is it incorrect for some reason?
import ProfilePhoto from '../assets/images/2019-headshot-png.png'
//create and export About function/component which contains HTML for the about me page 
export default function About() {
    return (
      <div>
        <h1>About Me</h1>
        <img src= {ProfilePhoto} alt="Headshot of Victoria Greenwood"  />
        <p>
        Hi, I'm Victoria! I'm a web developer currently participating in the Coding Bootcamp at UT Austin. Join me as I continue to deepen my knowledge of full stack web development! I have experience creating front-end projects with HTML, CSS, JavaScript, libraries (including jQuery and bootstrap), and third party APIs. I have also created back-end and full stack projects by using object oriented programming, Node.js, Express.js servers, creating RESTful APIs, and performing CRUD operations with a MySQL database using the Sequelize ORM for Node.js. Check back for updates, since more projects will be added soon.
        </p>
      </div>
    );
  }
  // <img src={ProfilePhoto} alt="Photo of Victoria Greenwood's face" /> put this code under the h1 if you can figure out how to get the jpeg to render without errors