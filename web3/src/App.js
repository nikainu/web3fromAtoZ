import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Character( {value}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var str = 'images/' + value + '.png'
  var explanation = texts[value]
  var title = titles[value]
  return <>
      <Modal
          show={show}
          onHide={handleClose}
          keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {explanation}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Ok</Button>
        </Modal.Footer>
      </Modal>
      <div className="container">
        <img src={str} alt={value} onClick={handleShow}/>
      </div>
    </>
}

function App() {
  return (
    <div className={'background-grey'}>
      <div className="flexbox-container">
        <Character value="A" />
        <Character value="B" />
        <Character value="C" />
      </div>
      <div className="flexbox-container">
        <Character value="D" />
        <Character value="E" />
        <Character value="F" />
      </div>
      <div className="flexbox-container">
        <Character value="G" />
        <Character value="H" />
        <Character value="I" />
      </div>
      </div>
  );
 
}

export default App;

const titles = new Map();

titles["A"] = "Address"

const texts = new Map();

texts["A"] = "wird benötigt um Transaktionen auf der blockchain zu versenden und zu erhalten. Sie wird aus den letzten 20 bytes des public keys generiert."


