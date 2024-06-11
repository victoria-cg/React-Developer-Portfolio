//useState will allow us to use state/data to pass data to child components as props
import {useState} from 'react';
import Project from '../Project';

//neet to add URL and photo for each project so the portfolio can be used
//useState receives the array of projects objects so that we can iterate over them with .map function to print infor about each project 
//send projects state/data as props to the project component so it can use the data
export default function Portfolio() {
  const [projects, setProjects] = useState([
    {title: 'Texas Camping Planner', address: 'https://victoria-cg.github.io/Texas-Camping-Planner/', id: 1},
    {title: 'Pup Portal', address: 'https://github.com/victoria-cg/Pup-Portal', id: 2},
    {title: 'Weather Dashboard', address: 'https://github.com/victoria-cg/Weather-Dashboard/deployments/github-pages', id: 3},
    {title: 'Password Generator', address: 'https://github.com/victoria-cg/Password-Generator-Challenge/deployments/github-pages', id: 4},
    {title: 'SVG Logo Maker', address: 'https://github.com/victoria-cg/SVG-Logo-Maker', id: 5},
    {title: 'README Generator', address: 'https://github.com/victoria-cg/README-Generator', id: 6}
  ]);

    return (
      <div>
       <Project projects={projects}/>
      </div>
    );
  }