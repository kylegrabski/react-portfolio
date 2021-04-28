import { Component } from "react";
import ProjectCards from "../components/ProjectCards/ProjectCards";
import projectData from "../projects.json";
import CarouselProjects from '../components/Carousel/Carousel'

class Projects extends Component {
  state = {
    projectData,
  };

  render() {
    return (
      <div>
        <CarouselProjects
        image={projectData}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "row wrap",
            justifyContent: "center",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            backgroundImage: " linear-gradient(to right, #fff 50%, #141E55 0%)",
          }}
        >
          {this.state.projectData.map((item) => (
            <ProjectCards key={item.id} {...item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
