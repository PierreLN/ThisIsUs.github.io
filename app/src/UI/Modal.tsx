import React, { Fragment } from "react";
import Card from "./Card";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props: any) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const Overlay = (props: any) => {
  return (
    <Card className={styles.modal}>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <div className={styles.image_section}>
          <img className={styles.image} src={props.image} alt={props.image} />
        </div>
        <p>{props.message}</p>
      </div>
    </Card>
  );
};

const Modal = (props: any) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm}></Backdrop>,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          image={props.image}
          message={props.message}
          onConfirm={props.onConfirm}
        ></Overlay>,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </Fragment>
  );
};

export default Modal;
