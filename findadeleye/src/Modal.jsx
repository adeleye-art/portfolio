/* eslint-disable react/prop-types */
import Project from "./Project";


const Modal = ({ isOpen, onClose, projectData }) => {
  if (!isOpen) return null;


  return (
    <div className="modal-overlay  project-details" onClick={onClose}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" onClick={(e) => e.stopPropagation()}>
        <Project
          {...projectData}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default Modal