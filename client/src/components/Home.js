import React from "react";
import { Link } from 'react-router-dom';
import ProjectDetail from "./ProjectDetail";

import dummyData from "../utils/dummyData"

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/login"><button>Founder - Login</button></Link>
      <Link to="/signup"><button>Founder - Sign Up</button></Link>
      <p>it will be home component showing list of fundraising events</p>
      {dummyData.map(p => <ProjectDetail title={p.project_title} id={p.id} key={p.id} funding={p.project_funding} assets={p.assets}/>)}
      {/* <ProjectDetail data={dummyData}/> */}
    </div>
  );
};

export default Home;
