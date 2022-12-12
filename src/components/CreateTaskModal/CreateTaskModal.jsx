import './CreateTaskModal.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';

function CreateTaskModal({ show, onClose, currentProject }) {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(addTask(value, currentProject, 'queue', 'low'));
      setValue('');
      onClose();
    }
  };
  return (
  // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div className={`create-project-modal ${show ? 'show' : ''}`} onClick={onClose} role="button" tabIndex={0}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div className="create-project-modal-content" onClick={(e) => e.stopPropagation()} role="button" tabIndex={0}>
          <form className="create-project-modal-form" action="" onSubmit={submitHandler}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="title" className="placeholder">
              Создать задачу
            </label>
            <input id="title" name="title" type="text" className="create-project-modal-form-title-input" onChange={(e) => { setValue(e.target.value); }} placeholder="Введите текст задачи" value={value} />
            <input className="create-project-modal-form-submit-button" type="submit" value="Create" />
          </form>

          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
          <a href="#" className="close-create-task-modal" onClick={onClose} />

        </div>

      </div>
    </div>
  );
}

export default CreateTaskModal;
