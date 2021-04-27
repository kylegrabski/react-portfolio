import { Component } from "react";
import ProjectCards from "../components/ProjectCards/ProjectCards";
import projectData from "../projects.json";

class Projects extends Component {
  state = {
    projectData,
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "row wrap",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          backgroundImage:" linear-gradient(to right, #fff 50%, #141E55 0%)",
        }}
      >
        {this.state.projectData.map((item) => (
          <ProjectCards key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default Projects;
