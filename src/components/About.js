import React, { Component } from "react";
import User from "./User";
import UserClass from "../UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h3>
          <UserClass name={"Nishant Class"} />
        </h3>
      </div>
    );
  }
}

export default About;
