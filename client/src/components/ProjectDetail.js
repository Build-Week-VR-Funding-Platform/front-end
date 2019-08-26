import React from "react";

const ProjectDetail = (props) => {
    console.log('props from projectDetail: ', props)
    return(
        <div className="event-card">
            <p>id: {props.id}</p>
            <h2>{props.title}</h2>
            <h3>funding: ${props.funding}</h3>
            <h3>assets: ${props.assets}</h3>

            {/* <p>(would be good if we have some images)</p>
            <p>Location: Seattle</p>
            <p>Sep 01, 2019 </p> */}
            <button>Detail</button>
        </div>
    )
}

export default ProjectDetail;