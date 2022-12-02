import './MainPage.css';
import { useState } from 'react';
import CreateProjectModal from '../CreateProjectModal/CreateProjectModal';

function MainPage() {
  const [showCreateWindow, setShowCreateWindow] = useState(false);

  const clickHandler = () => {
    setShowCreateWindow(true);
  };

  return (
    <div className="main-page">
      <button className="create-project-button" type="button" onClick={clickHandler}>Create new project</button>
      <CreateProjectModal onClose={() => setShowCreateWindow(false)} show={showCreateWindow} />
    </div>
  );
}

export default MainPage;
