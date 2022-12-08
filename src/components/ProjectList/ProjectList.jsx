import './ProjectLIst.css';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import ProjectItem from '../ProjectItem/ProjectItem';
import EmptyProjects from '../EmptyProjects/EmptyProjects';

function ProjectList() {
  const projects = useSelector((state) => state.projectReducer.projects);
  const notEmpty = projects.length > 0;

  return (

    <div className="project-list">
      { notEmpty ? (projects.map((project) => (
        // eslint-disable-next-line max-len
        <ProjectItem key={project.id} title={project.title} description={project.description} id={project.id} project={project} />
      ))) : <EmptyProjects />}

    </div>
  );
}

export default ProjectList;
