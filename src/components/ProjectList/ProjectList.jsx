import './ProjectLIst.css';
import { useSelector } from 'react-redux';
import ProjectItem from '../ProjectItem/ProjectItem';

function ProjectList() {
  const projects = useSelector((state) => state.projectReducer.projects);

  return (
    <div className="project-list">
      {projects.map((project) => (
        // eslint-disable-next-line max-len
        <ProjectItem key={project.id} title={project.title} description={project.description} date={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
