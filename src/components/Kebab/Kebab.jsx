import './Kebab.css';
import { useState } from 'react';
import EventProjectModal from '../EventsProjectModal/EventProjectModal';

function Kebab({ id }) {
  const [showEventWindow, setShowEventWindow] = useState(false);
  return (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className="kebab"
      onClick={() => {
        setShowEventWindow(true);
      }}
    >
      <div className="kebab-elements">
        <span className="kebab-dot" />
        <span className="kebab-dot" />
        <span className="kebab-dot" />
      </div>

      {/* eslint-disable-next-line max-len */}
      <EventProjectModal id={id} onClose={() => setShowEventWindow(false)} show={showEventWindow} />
    </div>

  );
}

export default Kebab;
