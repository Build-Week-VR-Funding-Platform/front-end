import React from "react";
import { Link } from 'react-router-dom';
import ProjectDetail from "./ProjectDetail";
import { Button } from "semantic-ui-react";

import dummyData from "../utils/dummyData"

const Home = () => {
  return (
    <div className="home-container">
      <div className="btn-container">
        <Link to="/login"><Button style={{backgroundColor: "#40367C", color: "white"}}>Founder - Login</Button></Link>
        <Link to="/signup"><Button style={{backgroundColor: "#49C1A7", color: "white"}}>Founder - Sign Up</Button></Link>
      </div>
      <p>it will be home component showing list of fundraising events</p>
      <div className="card-container">
      {dummyData.map(p => <ProjectDetail title={p.project_title} id={p.id} key={p.id} funding={p.project_funding} assets={p.assets} image={p.image} description={p.project_description}/>)}
      </div>
    </div>
  );
};

export default Home;
