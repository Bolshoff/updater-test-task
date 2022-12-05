import './MainPage.css';
import { useState } from 'react';
import CreateProjectModal from '../CreateProjectModal/CreateProjectModal';
import ProjectList from '../ProjectList/ProjectList';

function MainPage() {
  const [showCreateWindow, setShowCreateWindow] = useState(false);

  const clickHandler = () => {
    setShowCreateWindow(true);
  };

  return (
    <div className="main-page">
      <button className="create-project-button" type="button" onClick={clickHandler}>Create new project</button>
      <CreateProjectModal onClose={() => setShowCreateWindow(false)} show={showCreateWindow} />
      <ProjectList />
    </div>
  );
}

export default MainPage;
