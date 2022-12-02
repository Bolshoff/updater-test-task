import './CreateProjectModal.css';
import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import tinyMCEApi from '../../assets/tinyMCEApi';

function CreateProjectModal({ show, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
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

  const editorRef = useRef(null);

  return (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={`create-project-modal ${show ? 'show' : ''}`} onClick={onClose} role="button" tabIndex={0}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div className="create-project-modal-content" onClick={(e) => e.stopPropagation()} role="button" tabIndex={0}>
        <form className="create-project-modal-form" action="" onSubmit={submitHandler}>
          <input type="text" placeholder="Название проекта" onChange={handleChangeTitle} value={title} />
          {/* eslint-disable-next-line max-len */}
          {/* <input type="text" placeholder="Описание" onChange={handleChangeDescription} value={description} /> */}
          <Editor
            apiKey={tinyMCEApi}
            onEditorChange={(newValue) => setDescription(newValue)}
              /* eslint-disable-next-line no-return-assign */
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue="<p>This is the initial content of the editor.</p>"
            value={description}
            init={{
              height: 200,
              menubar: false,
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
          <input type="submit" value="Create" />
        </form>
        <button className="create-project-modal-close-button" type="button" onClick={onClose}>Close</button>

      </div>

    </div>
  );
}

export default CreateProjectModal;
