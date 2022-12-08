import './EventProjectModal.css';
import { useDispatch } from 'react-redux';

import { useEffect, useRef } from 'react';
import { deleteProject } from '../../redux/actions';

function EventProjectModal({ id, show, onClose }) {
  const dispatch = useDispatch();

  const handlerDelete = () => {
    dispatch(deleteProject(id));
    onClose();
  };
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (show && ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [show]);

  return (

    <div className={`event-project-modal ${show ? 'show' : ''}`} ref={ref}>

      <div className="event-project-modal-elem">

        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <span onClick={handlerDelete}>Delete</span>
      </div>
      <div className="event-project-modal-elem">
        <span>Edit</span>
      </div>

    </div>

  );
}

export default EventProjectModal;
