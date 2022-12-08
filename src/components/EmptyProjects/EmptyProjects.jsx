import './EmptyProjects.css';
import createProject from '../../assets/img/create_project.png';

function EmptyProjects() {
  return (
    <div className="empty-projects">
      <div className="empty-projects-img">
        <img src={createProject} alt="create-project-img" />
      </div>
      <div className="empty-projects-title">
        <p>
          No projects.
          { }
          <br />
          Create a project.
        </p>
      </div>
    </div>
  );
}

export default EmptyProjects;
