import React from 'react';
import dummyData from '../utils/dummyData';
import ProjectDetail from './Project';




function ProjectList(props){

    console.log('props', props.dummyData)

    return(
        
        <div className = "Projects" style={{border: "2px solid black"}}>
            <h1>HELLO!</h1>
           <h5>Maps out each "VR Project" in that companys account</h5>
            {props.dummyData.map((project, key) => {
            return <ProjectDetail projectDetail ={project} key = {key} />
            })}
        
        </div>
        
    );

}

export default ProjectList;