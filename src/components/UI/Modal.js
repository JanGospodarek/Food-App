import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
const { backdrop, modal, content } = styles;
function Backdrop(props) {
  return <div className={backdrop} onClick={props.onClose}></div>;
}
function ModalOverlay(props) {
  return (
    <div className={modal}>
      <div className={content}>{props.children}</div>
    </div>
  );
}
function Modal(props) {
  const portal = document.getElementById("overlays");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>,
        portal
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portal
      )}
    </React.Fragment>
  );
}
export default Modal;
