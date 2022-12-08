import './ProjectPage.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CreateTaskModal from '../CreateTaskModal/CreateTaskModal';

function ProjectPage() {
  const project = useSelector((state) => state.currentProjectReducer.currentProject);
  const [showCreateWindow, setShowCreateWindow] = useState(false);

  const clickHandler = () => {
    setShowCreateWindow(true);
  };

  const linkStyle = {
    margin: '1rem',
    textDecoration: 'none',
    color: 'grey',
  };
  return (
    <div className="project-page">

      <div className="project-title">
        <Link to="/" style={linkStyle}>projects /</Link>
        {' '}
        {project.title}
      </div>
      <div className="project-description">
        <div dangerouslySetInnerHTML={{ __html: project.description }} />
      </div>
      <div className="task-list">
        <div className="queue list">В очереди</div>
        <div className="development list">В работе</div>
        <div className="done list">Завершено</div>
      </div>
      <button className="create-task-button" type="button" onClick={clickHandler}>Create new project</button>
      <CreateTaskModal onClose={() => setShowCreateWindow(false)} show={showCreateWindow} />
    </div>
  );
}

export default ProjectPage;
