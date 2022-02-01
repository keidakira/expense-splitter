import Modal, { ModalActions, ModalHeader, ModalBody } from "../UI/Modal";

import Button from "../UI/Button";

const ErrorModal = (props) => {
  return (
    <Modal show={props.error}>
      <ModalHeader>
        <p>Invalid Expense</p>
      </ModalHeader>
      <ModalBody>
        <p>{props.errorMessage}</p>
      </ModalBody>
      <ModalActions>
        <Button onClick={props.actionPressed} title="OK" />
      </ModalActions>
    </Modal>
  );
};

export default ErrorModal;
