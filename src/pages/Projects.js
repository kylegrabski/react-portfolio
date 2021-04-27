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
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
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
