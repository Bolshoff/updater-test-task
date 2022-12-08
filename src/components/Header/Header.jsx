import './Header.css';
import { useState } from 'react';
import CreateProjectModal from '../CreateProjectModal/CreateProjectModal';

function Header() {
  const [showCreateWindow, setShowCreateWindow] = useState(false);

  const clickHandler = () => {
    setShowCreateWindow(true);
  };
  return (
    <div className="header">
      <div className="header-title">
        <div>Title</div>
        <div className="header-button">
          <button className="create-project-button" type="button" onClick={clickHandler}>+ New project</button>
        </div>

        <CreateProjectModal onClose={() => setShowCreateWindow(false)} show={showCreateWindow} />
      </div>
      <div className="header-bottom">Bottom</div>
    </div>
  );
}

export default Header;
