import './LeftMenuBar.css';
import { Link } from 'react-router-dom';

function LeftMenuBar() {
  const linkStyle = {
    // margin: '1rem',
    textDecoration: 'none',
    color: 'white',
    display: 'table-cell',
    verticalAlign: 'middle',
    width: '250px',
    height: '30px',
    marginTop: '5px',
  };
  return (
    <div className="left-menu-bar">
      <div className="left-side-menu-bar" />
      <div className="right-side-menu-bar">
        <div className="left-menu-bar-manage">
          <span className="left-menu-bar-manage-title">manage</span>
          <div className="left-menu-bar-manage-links">
            <Link to="/" style={linkStyle}>Projects</Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftMenuBar;
