import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>

      {/* conditional rendering */}
      {/* to check whether bio exists */}
      {/* we wrap in curly braces cause it a jsx operation */}
      {/* as long as what is on left is true, what is on right will be displayed */}
      {props.bio && <p>{props.bio}</p>}
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;

//About is parent to Links hence takes the actual value