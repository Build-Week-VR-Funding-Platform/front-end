import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h2>User page - dashboard</h2>
      <p>User-name : "HARD-CODED-Areum"</p>
      <p>Maybe post some events here</p>
      <Link to="new-project"><button>Start projects</button></Link>
      <Link to="/"><button>Discover projects</button></Link>
    </div>
  );
};

export default Users;
