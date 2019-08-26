import React from "react";
import { Link } from 'react-router-dom';
import ProjectDetail from "./ProjectDetail";

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/login"><button>Founder - Login</button></Link>
      <Link to="/signup"><button>Founder - Sign Up</button></Link>
      <p>it will be home component showing list of fundraising events</p>
      <p className="event-card">"HARD-CODED" Event 1 by Areum</p>
      <ProjectDetail />
    </div>
  );
};

export default Home;
