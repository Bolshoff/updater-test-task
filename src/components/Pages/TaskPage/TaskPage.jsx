import './TaskPage.css';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';

function TaskPage({ show, onClose }) {
  const task = useSelector((state) => state.currentTaskReducer.currentTask);

  const closeOnEscapeKeyDown = useCallback((e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  }, [onClose]);
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);
  return (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={`task-page-wrapper ${show ? 'show-task-page' : ''}`} onClick={onClose} role="button" tabIndex={0}>
      <div className="task-page">
        {task.title}
        {task.priority}
        {task.status}
      </div>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
      <a href="#" className="close" onClick={onClose} />
    </div>
  );
}

export default TaskPage;
