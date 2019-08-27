import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import ProjectDetail from "./Project";
import ProjectList from './ProjectList';
import dummyData from '../utils/dummyData';


class Home extends React.Component{
  constructor(props) {// will be login info
    super(props);
    this.state = {
      projects: [],
      username: props.username
    };
  }

  componentDidMount(){
    
  }

  render(){
  return (
    <div className="home-container">
      <Link to="/login"><button>Founder - Login</button></Link>
      <Link to="/signup"><button>Founder - Sign Up</button></Link>
      <ProjectList dummyData = {dummyData}/>
      <p>it will be home component showing list of fundraising events</p>
      <p className="event-card">"HARD-CODED" Event 1 by Areum</p>
      <ProjectDetail />
    </div>
  )
  }
};

export default Home;
