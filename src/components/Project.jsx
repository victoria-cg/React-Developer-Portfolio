
//project component will receive blogs as props and will get imported/used in the portfolio page to show the projects

//here we iterate over the array in Portfolio.jsx using .map method to print info about every project
//the key property lets the DOM keep track of each element for updating/outputting it, in this case the unique key is the id of each project
export default function Project(props) {
    const projects = props.projects
    return (
     <div>
    {projects.map((project) =>(
    <div key={project.id}> 
    <h2>{project.title}</h2>
    <a href= {project.address}>{project.address}</a>
    </div>
    ))}
     </div>
    );
  }


