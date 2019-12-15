import React from "react";

const ProjectSummary = ({ project }) => {
  if (project) {
    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text darken-3">
          <span className="card-title">{project.title}</span>
          <p>
            Posted by {project.authorFirstName} {project.authorLastName}
          </p>
          <p className="grey-text">30 November 2019</p>
        </div>
      </div>
    );
  } else {
    return <p>Loading Project ....</p>;
  }
};

export default ProjectSummary;
