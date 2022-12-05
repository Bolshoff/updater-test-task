import './ProjectPage.css';
import { useSelector } from 'react-redux';

function ProjectPage() {
  const project = useSelector((state) => state.currentProjectReducer.currentProject);
  return (
    <div className="project-page">
      <div>
        {project.title}
      </div>
    </div>
  );
}

export default ProjectPage;
