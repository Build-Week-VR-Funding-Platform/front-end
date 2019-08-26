import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/"><p>Logo-VR-funding</p></Link>
      <Link to="/signup"><p>Sign up</p></Link>
      <Link to="/users"><p>User</p></Link>
    </div>
  );
};

export default Header;
