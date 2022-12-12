import './TaskItem.css';
import { useDispatch } from 'react-redux';

import { setCurrentTask } from '../../redux/actions';

function TaskItem({
  title, description, status, priority, number, task, onClick,
}) {
  const dispatch = useDispatch();
  const clickOnTaskItem = () => {
    dispatch(setCurrentTask(task));
    onClick();
  };

  return (
    <div className="task-item-wrapper">

      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="task-item" onClick={clickOnTaskItem}>

        <div className="task-item__title">{title}</div>
        <div className="task-item__description">{description}</div>
        <div className="task-item__number">{number}</div>
        <div className="task-item__status">{status}</div>
        <div className="task-item__priority">{priority}</div>
        <div className="task-item__create-date" />
        <div className="task-item__finished-date" />
        <div className="task-item__time-at-work" />
        <div className="task-item__subtasks" />
        <div className="task-item__files" />
        <div className="task-item__comments" />

      </div>

    </div>
  );
}

export default TaskItem;
