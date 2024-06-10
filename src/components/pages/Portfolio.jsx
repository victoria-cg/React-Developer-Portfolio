//useState will allow us to use state/data to pass data to child components as props
import {useState} from 'react';
import Project from '../Project';

//neet to add URL and photo for each project so the portfolio can be used
//useState receives the array of projects objects so that we can iterate over them with .map function to print infor about each project 
//send projects state/data as props to the project component so it can use the data
export default function Portfolio() {
  const [projects, setProjects] = useState([
    {title: 'Project 1', id: 1},
    {title: 'Project 2', id: 2},
    {title: 'Project 3', id: 3},
    {title: 'Project 4', id: 4},
    {title: 'Project 5', id: 5},
    {title: 'Project 6', id: 6}
  ]);

    return (
      <div>
       <Project projects={projects} />
      </div>
    );
  }