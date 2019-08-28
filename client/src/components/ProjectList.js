import React, {useState, useEffect} from 'react';
import dummyData from '../utils/dummyData';
import ProjectDetail from './Project';




function ProjectList(props){
const [projects, setProjects] = useState(dummyData);

// load in data from backend 

    console.log('props', props.dummyData)
    console.log('projects', projects);

    return(
        
        <div className = "Projects" style={{border: "2px solid black"}}>
            <h1>HELLO!</h1>
           <h5>Maps out each "VR Project" in that companys account</h5>
            {projects.map((project, key) => {
            return <ProjectDetail detail ={project} key = {key} />
            })}
        
        </div>
        
    );

}


export default ProjectList;