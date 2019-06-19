import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ModalDialog extends React.Component {
  static instance;

  static show(args) {
    if (ModalDialog.instance) ModalDialog.instance.open(args);
  }

  static close() {
    if (ModalDialog.instance) ModalDialog.instance.remove();
  }

  constructor(props) {
    super(props);

    ModalDialog.instance = this;
  }

  state = {
    content: '',
    open: false,
    title: ''
  };

  open(args) {
    this.setState({ open: true, title: args.title, content: <args.component {...args.passProps} /> });
  }

  remove() {
    this.setState({ open: false, title: null, content: null });
  }

  render() {
    const { content, open, title } = this.state;
    const setClose = () => this.remove();

    return (

      <Modal show={open} onHide={setClose} className="modal-1100">
        <Modal.Header closeButton>
          <Modal.Title className="m-0">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-cream pt-3">{content}</Modal.Body>
      </Modal>
    );
  }
}
