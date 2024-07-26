import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ children, handleCart }) => {
  return ReactDOM.createPortal(
    <>
      <div className={styles.modalBackdrop} onClick={handleCart}></div>
      <div className={styles.modalContent}>{children}</div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
