import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={`${styles.modal} ${props.show === false && "hide"}`}>
      <div className={styles["modal__container"]}>{props.children}</div>
    </div>
  );
};

export const ModalActions = (props) => {
  return <div className={styles["modal__actions"]}>{props.children}</div>;
};

export const ModalBody = (props) => {
  return <div className={styles["modal__body"]}>{props.children}</div>;
};

export const ModalHeader = (props) => {
  return <div className={styles["modal__header"]}>{props.children}</div>;
};

export default Modal;
