import './CreateProjectModal.css';
import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch } from 'react-redux';

import { tinyMCEApi } from '../../assets/tinyMCEApi';

import { addNewProject } from '../../redux/actions';

function CreateProjectModal({ show, onClose }) {
  const [descriptionValue, setDescriptionValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const dispatch = useDispatch();
  const value = { title: titleValue, description: descriptionValue };

  const handleChangeTitle = (e) => {
    setTitleValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (titleValue) {
      dispatch(addNewProject(value));
      setTitleValue('');
      setDescriptionValue('');
      onClose();
    }
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

  const editorRef = useRef(null);

  return (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={`create-project-modal ${show ? 'show' : ''}`} onClick={onClose} role="button" tabIndex={0}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div className="create-project-modal-content" onClick={(e) => e.stopPropagation()} role="button" tabIndex={0}>
        <form className="create-project-modal-form" action="" onSubmit={submitHandler}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="title" className="placeholder">
            Новый проект
          </label>
          <input id="title" name="title" type="text" className="create-project-modal-form-title-input" onChange={handleChangeTitle} placeholder="Введите названиме проекта" value={titleValue} />

          {/* eslint-disable-next-line max-len */}

          <Editor
            apiKey={tinyMCEApi}
            id="description"
            value={descriptionValue}
            onEditorChange={(newValue) => setDescriptionValue(newValue)}

              /* eslint-disable-next-line react/jsx-props-no-multi-spaces,no-return-assign */
            onInit={(evt, editor) => editorRef.current = editor}
            init={{
              height: 200,
              menubar: false,
              placeholder: 'Описание проекта',
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar: 'undo redo | formatselect | '
                    + 'bold italic backcolor | alignleft aligncenter '
                    + 'alignright alignjustify | bullist numlist outdent indent | '
                    + 'removeformat | help',

              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
          <input className="create-project-modal-form-submit-button" type="submit" value="Create" />
        </form>

        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
        <a href="#" className="close" onClick={onClose} />

      </div>

    </div>
  );
}

export default CreateProjectModal;
