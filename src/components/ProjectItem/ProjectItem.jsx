import './ProjectItem.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentProject } from '../../redux/actions';

function ProjectItem({
  title, date, description, project,
}) {
  const dispatch = useDispatch();
  const clickOnProjectItem = () => {
    dispatch(setCurrentProject(project));
  };
  return (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className="project-item" onClick={clickOnProjectItem}>
      <div>
        {title}
        {' '}
        {new Date(date).toLocaleDateString()}
        {' '}
        {description}
      </div>
      <div>Delete</div>
      <div>Complete</div>
      <div>Edit</div>
      <Link to={`/${project.title}`}>Подробнее</Link>
    </div>
  );
}

export default ProjectItem;
