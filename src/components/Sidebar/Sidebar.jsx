import './Sidebar.css';
import LeftMenuBar from '../LeftMenuBar/LeftMenuBar';

function Sidebar() {
  return (
    <div className="sidebar">
      <LeftMenuBar />
      <a href="somelink">Проекты</a>

    </div>
  );
}

export default Sidebar;
