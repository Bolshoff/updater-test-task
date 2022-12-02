import './CreateProjectModal.css';
import { useCallback, useEffect, useState } from 'react';

function CreateProjectModal({ show, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setTitle('');
    setDescription('');
    onClose();
    console.log(title);
    console.log(description);
  };

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
    <div className={`create-project-modal ${show ? 'show' : ''}`} onClick={onClose} role="button" tabIndex={0}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div className="create-project-modal-content" onClick={(e) => e.stopPropagation()} role="button" tabIndex={0}>
        <form className="create-project-modal-form" action="" onSubmit={submitHandler}>
          <input type="text" placeholder="Название проекта" onChange={handleChangeTitle} value={title} />
          <input type="text" placeholder="Описание" onChange={handleChangeDescription} value={description} />
          <input type="submit" value="Create" />
        </form>
        <button className="create-project-modal-close-button" type="button" onClick={onClose}>Close</button>
      </div>

    </div>
  );
}

export default CreateProjectModal;
