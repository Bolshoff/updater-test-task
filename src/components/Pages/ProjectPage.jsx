import './ProjectPage.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CreateTaskModal from '../CreateTaskModal/CreateTaskModal';
import TaskItem from '../TaskItem/TaskItem';
import TaskPage from './TaskPage/TaskPage';

function ProjectPage() {
  const project = useSelector((state) => state.currentProjectReducer.currentProject);
  const [showCreateWindow, setShowCreateWindow] = useState(false);
  const [showTaskWindow, setShowTaskWindow] = useState(false);

  const clickHandler = () => {
    setShowCreateWindow(true);
  };

  const clickTaskHandler = () => {
    setShowTaskWindow(true);
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
        <div className="queue list">
          В очереди
          {project.tasks.map((task) => (
            <div key={task.id}>
              {(task.status === 'queue')
                ? (
                  <TaskItem
                    title={task.title}
                    description={task.description}
                    number={task.number}
                    status={task.status}
                    priority={task.priority}
                    task={task}
                    id={task.id}
                    onClick={clickTaskHandler}
                  />
                ) : null}
            </div>
          ))}
        </div>
        <div className="development list">
          В работе
          {project.tasks.map((task) => (
            <div key={task.id}>
              {(task.status === 'in_progress')
                ? (
                  <TaskItem
                    title={task.title}
                    description={task.description}
                    number={task.number}
                    status={task.status}
                    priority={task.priority}
                    task={task}
                    id={task.id}
                    onClick={clickTaskHandler}
                  />
                ) : null}
            </div>
          ))}
        </div>
        <div className="done list">
          Завершено
          {project.tasks.map((task) => (
            <div key={task.id}>
              {(task.status === 'done')
                ? (
                  <TaskItem
                    title={task.title}
                    description={task.description}
                    number={task.number}
                    status={task.status}
                    priority={task.priority}
                    task={task}
                    id={task.id}
                    onClick={clickTaskHandler}
                  />
                ) : null}
            </div>
          ))}
        </div>
      </div>
      <button className="create-task-button" type="button" onClick={clickHandler}>Create new project</button>
      {/* eslint-disable-next-line max-len */}
      <CreateTaskModal onClose={() => setShowCreateWindow(false)} show={showCreateWindow} currentProject={project} />
      {/* eslint-disable-next-line max-len */}
      <TaskPage onClose={() => setShowTaskWindow(false)} show={showTaskWindow} />
    </div>
  );
}

export default ProjectPage;
