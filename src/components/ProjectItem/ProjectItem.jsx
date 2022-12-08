import './ProjectItem.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentProject } from '../../redux/actions';
import Kebab from '../Kebab/Kebab';

function ProjectItem({
  title, description, project, id,
}) {
  const dispatch = useDispatch();
  const clickOnProjectItem = () => {
    dispatch(setCurrentProject(project));
  };

  const linkStyle = {
    margin: '1rem',
    textDecoration: 'none',
    color: 'grey',
  };
  return (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className="project-item" onClick={clickOnProjectItem}>
      <div className="project-item-content">
        <Link to={`/${project.title}`} style={linkStyle}>

          <div className="project-title">
            {title}
          </div>
          <div className="project-description">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>

        </Link>
      </div>
      <Kebab id={id} />
    </div>
  );
}

export default ProjectItem;
