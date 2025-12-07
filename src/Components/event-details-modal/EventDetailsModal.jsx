import React, { useState } from "react";
import "./EventDetailsModal.css";
import program_1 from "../../assets/program-1.png"; //src/Components/Programs/Programs.jsx
export default function Modal() {
  const [modal, setModal] = useState(false);

  const EventDetailsModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={EventDetailsModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={EventDetailsModal} className="overlay"></div>
          <div className="modal-content">
            <h1>Event Details</h1>      
            <img src={program_1} alt="" />
            <button className="close-modal" onClick={EventDetailsModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}