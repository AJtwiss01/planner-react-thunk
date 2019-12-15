import React from 'react';
import ProjectSummsry from '../projects/ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
    return ( 
        <div className="project-list section">
      {
          projects && 
          projects.map(project => {
             return (
                <Link to={`/project/${project.id}`}>
                 <ProjectSummsry project={project} key={project.id}/>
                 </Link>
             )
          })
      }

      </div>
     );
}
 
export default ProjectList;