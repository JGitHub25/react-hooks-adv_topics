import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/people">People</Link>
    </div>
  );
};

export default About;
