import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ReactsModals = (props) => {
  console.log(props.product);
  const { title, image, price, description } = props.product;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex justify-content-center align-items-center">
            <img className="w-50 p-3 " src={image} alt="" />
            <h1 className="text-center">
              $<span>{price}</span>{" "}
            </h1>
          </div>
        </Modal.Body>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReactsModals;
