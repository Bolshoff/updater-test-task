import './TaskPage.css';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import trashBin from '../../../assets/img/trashBin.png';

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
    <div className={`task-page-wrapper ${show ? 'show-task-page' : ''}`} role="button" tabIndex={0}>
      <div className="task-page">
        <div className="task-page__header">
          <div className="task-page__header-title">
            {task.title}
          </div>
          <div className="task-page__header-buttons">
            <img className="task-page-trash-bin" src={trashBin} alt="trashBin.png" style={{ width: 32, height: 32 }} />
            {/* eslint-disable-next-line max-len */}
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#" className="task-page-close" onClick={onClose} />
          </div>

        </div>
      </div>

    </div>
  );
}

export default TaskPage;
