import React from "react";

const ProjectDetail = (props) =>{
    console.log('ProjectDetail props: ', props.detail)
    const id = props.id
    return(
        <div className="event-card">
            <h2>funding ammount: {id}</h2>
{/* 
            <h2>VR for everyone</h2>
            <p>(would be good if we have some images)</p>
            <p>Location: Seattle</p>
            <p>Sep 01, 2019 </p> */}
            <button>Detail</button>
        </div>
    )
}

export default ProjectDetail;